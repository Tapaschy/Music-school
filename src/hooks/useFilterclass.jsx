import { useQuery } from "@tanstack/react-query";


const useFilterclass = () => {
    const { data: classes = [], refetch} = useQuery(['classes'], async () => {
        const res = await fetch('https://assignment-12-server-olive.vercel.app/classes')
        return res.json();
    })
    // const approvedclasses = classes.filter(classes => classes.status === 'pending').sort((a, b) => b.price - a.price);

    return [classes,refetch];

};

export default useFilterclass;

