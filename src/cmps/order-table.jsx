import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { AvatarPicture } from '../cmps/user-avatar-picture';




export function OrderTable({ orders, updateOrder }) {

  const [sortedOrders, setSortedOrders] = useState(orders)
  useEffect(() => {
    setSortedOrders(sortOrders())
  }, [orders])

  function sortOrders() {
    console.log(orders);
    const sorted = orders.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    console.log(sorted);
    return sorted
  }

  function orderDateTime(createdAt) {
    const now = new Date();
    const orderTime = new Date(createdAt);
    let isTody = false;
    let isYear = now.getFullYear() === orderTime.getFullYear() ? true : false;
    if (now.getDate() === orderTime.getDate() && now.getMonth() === orderTime.getMonth()) {
      isTody = true;
    }
    if (isTody && isYear) {
      const time = orderTime.toLocaleTimeString();
      const idxSecondColon = time.indexOf(':', 3)
      return time.slice(0, idxSecondColon)
      // } else if (isYear) {
      //     let date = orderTime.toLocaleDateString()
      //     let dateArr = date.split('.');
      //     timeToShow = `${dateArr[0]}.${dateArr[1]}`
    } else return orderTime.toLocaleDateString();
  }

  function onUpdateOrder(ev, action) {
    const order = orders.find(order => order._id === ev.target.dataset.id)
    order.status = action
    // console.log(order);
    console.log(action);
    updateOrder(order)
  }

  return (
    <TableContainer className='order-table' component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="Orders table" stickyHeader={true}>
        <TableHead>
          <TableRow className='table-row' >
            <TableCell align="center">Date</TableCell>
            <TableCell align="center">Gig</TableCell>
            <TableCell align="center">Price</TableCell>
            <TableCell align="center">Buyer</TableCell>
            <TableCell align="center">Status</TableCell>
            <TableCell align="center"></TableCell>
            {/* <TableCell align="center">Actions</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {sortedOrders.map((order) => (
            <TableRow
              key={order._id}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}

              className={order.status !== 'pending' ? 'table-row transperent' : 'table-row'}
            >
              {/* <TableCell align="center">{new Date(order.createdAt).toLocaleString('en-EN', { timeZone: 'UTC' })}</TableCell> */}
              <TableCell align="center">{orderDateTime(order.createdAt)}</TableCell>
              <TableCell align="center">{order.gig.name || order.gig.orderTitle}</TableCell>
              <TableCell align="center">${order.gig.price}</TableCell>
              <TableCell align="center">
                <div className="buyer-picture-name flex column">
                  <AvatarPicture user={order.buyer} size={'32px'} />
                  {order.buyer.username || order.buyer.name}
                </div>
              </TableCell>
              <TableCell align="center">{order.status}</TableCell>
              <TableCell align="center">
                <button data-id={order._id} onClick={(e) => onUpdateOrder(e, 'In Progress')}>Accept</button>
                <button data-id={order._id} className='btn-decline' onClick={(e) => onUpdateOrder(e, 'Declined')}>Decline</button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
