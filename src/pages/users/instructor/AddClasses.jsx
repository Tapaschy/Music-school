import React, { useContext } from 'react';
import SectionTitle from '../../../components/Title/SectionTitle';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../../providers/AuthProvider';
import Swal from 'sweetalert2';
const img_hosting_token = import.meta.env.VITE_Image_Upload_token;

const AddClasses = () => {
    const { user } = useContext(AuthContext);
    console.log(user);
    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
        console.log(data);
        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(url, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(imgResponse => {
                if (imgResponse.success) {
                    const imgURL = imgResponse.data.display_url;
                    const { name, category, classname, email, price, seats, status, classurl, photoUrl } = data;
                    const newClass = {
                        Instructorname: user?.displayName,
                        price: parseFloat(price),
                        email:user?.email,
                        category,
                        classname,
                        seats:parseFloat(seats),
                        classurl: imgURL,
                        status:'pending',
                        photoUrl:user?.photoURL,

                    }
                    console.log(newClass);
                    fetch(`http://localhost:5000/classes`, {
                        method: 'POST',
                        headers: {
                            "Content-Type": "application/json"
                          },
                          body: JSON.stringify(newClass)
                    })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if(data.modifiedCount){
                            refetch();
                            Swal.fire({
                                position: 'top-end',
                                icon: 'success',
                                title: `is an  Now!`,
                                showConfirmButton: false,
                                timer: 1500
                              });
                        }
                    })




                    // axiosSecure.post('/menu', newItem)
                    //     .then(data => {
                    //         console.log('after posting new menu item', data.data)
                    //         if (data.data.insertedId) {
                    //             reset();
                    //             Swal.fire({
                    //                 position: 'top-end',
                    //                 icon: 'success',
                    //                 title: 'Item added successfully',
                    //                 showConfirmButton: false,
                    //                 timer: 1500
                    //             })
                    //         }
                    //     })
                }
            })

        // const {name,category,classname,email,price,seats,status,classurl,photoUrl} = data;
        // const newItem = {name:user?.displayName}
        // console.log(newItem);
    };
    return (
        <div className="w-full px-10">
            <SectionTitle subHeading="" heading="Add an Class" ></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Class Name*</span>
                    </label>
                    <input type="text" placeholder="Class Name"
                        {...register("classname", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor Name*</span>
                    </label>
                    <input type="text" disabled placeholder={user?.displayName} 
                        {...register('Instructorname')}
                        className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Instructor email*</span>
                    </label>
                    <input type="text" disabled placeholder={user?.email}
                        {...register("email")}
                        className="input input-bordered w-full " />
                </div>
                <div className="flex my-4">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text">Type*</span>
                        </label>
                        <select defaultValue="Pick One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled>Pick One</option>
                            <option>Guitar</option>
                            <option>violin</option>
                            <option>Piano</option>
                        </select>
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                    <div className="form-control w-full ml-4">
                        <label className="label">
                            <span className="label-text font-semibold">Availabe seats*</span>
                        </label>
                        <input type="number" {...register("seats", { required: true })} placeholder="Type here" className="input input-bordered w-full " />
                    </div>
                </div>

                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm mt-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddClasses;