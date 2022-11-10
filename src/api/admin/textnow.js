import request from '@/utils/request';

export async function GetTextnowGroups(data){
    const res = await request.get('/textnow/group', {params:data});
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function DelTextnowGroup(data){
    const res = await request.post('/textnow/del-group',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function AddTextnowGroup(data){
    const res = await request.post('/textnow/add-group',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function UpdateTextnowGroup(data){
    const res = await request.post('/textnow/update-group',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function GetTextnowList(data){
    const res = await request.get('/textnow/list',{params:data});
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function ImportTextnowAccount(file,query){
    const formData = new FormData();
    formData.append('TextnowImport[file]', file);
    formData.append('TextnowImport[group_id]',query.id)
    const res = await request.post('/textnow/import',formData);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function GetDictTextnowGroups(){
    const res = await request.get('/dictionary/textnow-groups');
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function UpdateTextnowAccount(data){
    const res = await request.post('/textnow/update',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function DelTextnowAccount(data){
    const res = await request.post('/textnow/delete',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}