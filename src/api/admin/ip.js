import request from '@/utils/request';

/**
 * 添加菜单
 */
export async function getIpGroups(data) {
    const res = await request.get('/ip/group',{params:data});
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function delIpGroup(data){
    const res = await request.post('/ip/del-group',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function addIpGroup(data){
    const res = await request.post('/ip/add-group',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function editIpGroup(data){
    const res = await request.post('/ip/update-group',data);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}

export async function getIpList(data){
    const res = await request.get('/ip/list',{params:data});
    if (res.data.code === 0) return res.data.data;
    return Promise.reject(new Error(res.data.message));
}

export async function GvIpImport(file,query){
    const formData = new FormData();
    formData.append('IpImport[file]', file);
    formData.append('IpImport[group_id]',query.id)
    const res = await request.post('/ip/import', formData);
    if (res.data.code === 0) return res.data.message;
    return Promise.reject(new Error(res.data.message));
}