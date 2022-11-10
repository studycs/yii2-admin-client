import request from '@/utils/request';

/**
 * 添加菜单
 */
export async function getDictGv() {
    const res = await request.get('/dictionary/textnow-all');
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function getReplyGroup(data){
    const res = await request.get('/reply/group',{params:data});
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function getMessageList(data){
    const res = await request.get('/reply/list',{params:data});
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function UnreadMsgPost(data){
    const res = await request.post('/reply/send',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function UnreadMsgUpload(data){
    const res = await request.post('/reply/send',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function MarkMsgRead(data){
    const res = await request.post('/reply/mark',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}
