import { useQuery } from "@tanstack/react-query";


const useFilterclass = () => {
    const { data: classes = [], refetch} = useQuery(['classes'], async () => {
        const res = await fetch('http://localhost:5000/classes')
        return res.json();
    })
    // const approvedclasses = classes.filter(classes => classes.status === 'pending').sort((a, b) => b.price - a.price);

    return [classes,refetch];

};

export default useFilterclass;

