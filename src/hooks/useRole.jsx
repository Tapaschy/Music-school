import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import useAxiosSecure from './useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const useRole = () => {
    const { user } = useContext(AuthContext);
    const [axiosSecure] = useAxiosSecure();
    // console.log(user);
    const { data: role = [], refetch,isLoading } = useQuery(['role',user?.email], async () => {
        const res = await axiosSecure(`users/role/${user.email}`)
        return res.data;
    });
    return [role, refetch]
};

export default useRole;