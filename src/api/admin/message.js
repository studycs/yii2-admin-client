import request from '@/utils/request';

export async function GetMessageGroups(data){
    const res = await request.get('/message/group',{params:data});
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function DelMessageGroup(data){
    const res = await request.post('/message/del-group',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function AddMessageGroup(data){
    const res = await request.post('/message/add-group',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function UpdateMessageGroup(data){
    const res = await request.post('/message/update-group',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function GetMessageList(data){
    const res = await request.get('/message/list',{params:data});
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function DelMessageItem(data){
    const res = await request.post('/message/del-msg',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function AddMessageItem(data){
    const res = await request.post('/message/add-msg',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function UpdateMessageItem(data){
    const res = await request.post('/message/update-msg',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function GetLogs(data){
    const res = await request.get('/message/logs',{params:data});
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function GetLog(data){
    const res = await request.get('/message/log',{params:data});
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function GetSendGroups(){
    const res = await request.get('/dictionary/user-textnow-groups');
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function GetReceiveGroups(){
    const res = await request.get('/dictionary/user-receive-groups');
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function GetTextnowMessageGroups(){
    const res = await request.get('/dictionary/user-message-groups');
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function TextnowMessageSend(data){
    const res = await request.post('/message/send-msg',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}