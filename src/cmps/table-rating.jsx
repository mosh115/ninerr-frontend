import { ProgressBar } from "./progress-bar"


export function TableRating() {
    return (
        <table className="table-rating">
            <tbody className="flex column">
                <tr className="flex ">
                    <td><span >5 Stars</span></td>
                    <td className="grow"><ProgressBar completed="80" /></td>
                    <td className="raters">(72)</td>
                </tr>
                <tr className="flex">
                    <td><span>4 Stars</span></td>
                    <td className="grow"><ProgressBar completed="10" /></td>
                    <td className="raters">(4)</td>
                </tr>
                <tr className="flex">
                    <td><span>3 Stars</span></td>
                    <td className="grow"><ProgressBar completed="0" /></td>
                    <td className="raters">(0)</td>
                </tr>
                <tr className="flex">
                    <td><span>2 Stars</span></td>
                    <td className="grow"><ProgressBar completed="0" /></td>
                    <td className="raters">(0)</td>
                </tr>
                <tr className="flex">
                    <td><span >1 Star</span></td>
                    <td className="grow"><ProgressBar completed="10" /></td>
                    <td className="raters">(38)</td>
                </tr>
            </tbody>
        </table>
    )

}  