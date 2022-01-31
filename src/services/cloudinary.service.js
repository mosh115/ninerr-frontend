import axios from "axios";

export async function uploadImg(file) {
    // console.log(file);
    const CLOUD_NAME = 'ddkzek0ux'
    const UPLOAD_PRESET = 'n9hqjdzj'
    const UPLOAD_URL = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`

    const formData = new FormData();
    // formData.append('file', ev.target.files[0])
    formData.append('file', file)
    formData.append('upload_preset', UPLOAD_PRESET);
    try {
        const res = await axios({
            url: UPLOAD_URL,
            method: 'POST',
            data: formData
        })
        // console.log(res.data.url);
        return res.data.url
    }
    catch (err) {
        console.log(err)
        throw err
    }
}