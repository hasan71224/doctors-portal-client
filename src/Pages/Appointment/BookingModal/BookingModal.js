import { jsonEval } from '@firebase/util';
import { format } from 'date-fns';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { toast } from 'react-toastify';

const BookingModal = ({ date, treatment, setTreatment, refetch }) => {
    const { _id, name, slots, price } = treatment;
    const [user, loading, error] = useAuthState(auth);
    const formattedDate = format(date, 'PP');

    const handleBooking = event =>{
        event.preventDefault();
        const slot = event.target.slot.value;
        // console.log(_id, name, slot);
        const booking = {
            treatmentId:_id,
            treatment: name,
            date: formattedDate,
            slot,
            price,
            patient:user.email,
            patientName:user.displayName,
            phone: event.target.phone.value
        }

        fetch('https://still-taiga-81457.herokuapp.com/booking',{
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
        .then(res=>res.json())
        .then(data =>{
            console.log(data);
            if(data.success){
                toast(`Appointment is set ${formattedDate} at ${slot}`)
            }
            else{
                toast.error(`Already have an Appointment at ${date.booking?.date} at ${date.booking?.slot}`)
            }
            refetch();
            //to close the modal
            setTreatment(null)
        })

    }
    return (
        <div>
            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <label htmlFor="booking-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="font-bold text-lg">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-2 mt-5'>

                        <input type="text" value={format(date, 'PP')} disabled className="input input-bordered w-full max-w-xl" />

                        <select name='slot' className="select select-bordered w-full max-w-xl">
                            {
                                slots.map((slot, index) => <option 
                                    key={index}
                                    value={slot}
                                >{slot}</option>)
                            }
                        </select>

                        <input type="text" name='name' disabled value={user?.displayName || ''} className="input input-bordered w-full max-w-xl" />
                        <input type="text" name='phone' placeholder="Phone Number" className="input input-bordered w-full max-w-xl" />
                        <input type="email" name='phone' disabled value={user?.email || ''} className="input input-bordered w-full max-w-xl" />
                        <input type="submit" value='Submit' className="input input-bordered w-full max-w-xl btn btn-accent text-white font-semi-bold" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default BookingModal;