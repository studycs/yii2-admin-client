import request from '@/utils/request';

/**
 * 添加菜单
 */
export async function getGvGroups(data) {
    const res = await request.post('/gv/list', data);
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function addGvGroup(data){
    const res = await request.post('/gv/add-group',data);
    if(res.data.code===0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function updateGvGroup(data){
    const res = await request.post('/gv/update-group',data);
    if(res.data.code===0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function deleteGvGroup(data){
    const res = await request.post('/gv/del-group',data);
    if(res.data.code===0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function getGvAccountList(data) {
    const res = await request.post('/gv/accout', data);
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function accountImport(file,query){
    const formData = new FormData();
    formData.append('ImportGv[file]', file);
    formData.append('ImportGv[group_id]',query.id)
    const res = await request.post('/gv/import-gv', formData);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function GvLoginReset(data){
    const res = await request.post('/gv/reset-login', data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function DistributeIp(data){
    const res = await request.post('/gv/distribute-ip', data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function UpdateGvAccount(data){
    const res = await request.post('/gv/update-gv', data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function GetGvGroups(){
    const res = await request.get('/auth/gv-groups');
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}