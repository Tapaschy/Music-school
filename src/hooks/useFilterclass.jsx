import { useQuery } from "@tanstack/react-query";


const useFilterclass = () => {
    const { data: classes = [], refetch} = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json();
    })
    const approvedclasses = classes.filter(classes => classes.status === 'pending').sort((a, b) => b.price - a.price);

    return [classes,refetch];

};

export default useFilterclass;



// const useAdmin = () => {
//     const {user} = useAuth();
//     const [axiosSecure] = useAxiosSecure();
//     // use axios secure with react query
//     const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
//         queryKey: ['isAdmin', user?.email],
//         queryFn: async () => {
//             const res = await axiosSecure.get(`/users/admin/${user?.email}`);
//             return res.data.admin;
//         }
//     })
//     return [isAdmin, isAdminLoading]
// }
// export default useAdmin;