import request from '@/utils/request';

export async function GetTemplateGroups(data) {
    const res = await request.get('/template/group', {params:data});
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function editMsgGroup(data){
    const res = await request.post('/template/update-group', data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function addMsgGroup(data){
    const res = await request.post('/template/add-group',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function delMsgGroup(data){
    const res = await request.post('/template/del-group',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function sendMessage(data){
    const res = await request.post('/template/send',data);
    if(res.data.code===0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function GetSendGroups(){
    const res = await request.get('/auth/gv-groups');
    if(res.data.code===0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function GetReceiveGroups(){
    const res = await request.get('/auth/receive-groups');
    if(res.data.code===0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function GetMessageGroups(){
    const res = await request.get('/auth/message-group');
    if(res.data.code===0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function GetMessageList(data){
    const res = await request.get('/template/list',{params:data});
    if(res.data.code===0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function DelMessageItem(data){
    const res = await request.post('/template/delete',data);
    if(res.data.code===0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function AddMessageItem(data){
    const res = await request.post('/template/create',data);
    if(res.data.code===0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function UpdateMessageItem(data){
    const res = await request.post('/template/update',data);
    if(res.data.code===0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function GetSendLogGroup(data){
    const res = await request.get('/template/deliver',{params:data});
    if(res.data.code===0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function GetSendLogDetail(data){
    const res = await request.get('/template/result',{params:data});
    if(res.data.code===0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}