/**
 *  用以请求接口数据
 */

import axios from './index'

// let base = "/api";

/**
 * common
 */
// 上传图片
export const getImgURI = params => {
    return  axios({
        url: 'api/upload/uploadImage',
        method: 'post',
        data: params
        // baseURL: process.env.VUE_APP_API_ROOT
    })
}
