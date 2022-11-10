import request from '@/utils/request';

export async function getReceiveGroups(data) {
    const res = await request.get('/receive/group',{params:data});
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function AddReceiveGroup(data){
    const res = await request.post('/receive/add-group', data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function DelReceiveGroup(data){
    const res = await request.post('/receive/del-group', data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function GetReceiveList(data){
    const res = await request.get('/receive/list', {params:data});
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function ReceiveImport(file,query){
    const formData = new FormData();
    formData.append('ImportReceive[file]', file);
    formData.append('ImportReceive[group_id]',query.id)
    const res = await request.post('/receive/import', formData);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}