import Button from './Button'
import Image from 'next/image'


export default function Card(props) {
    return (
        <div className='pt-3 bg-[#062f5f9c] p-5 m-5 rounded-[20px]'>
            <div className='pb-5'>
                <img src={props.img} className='w-[50vw]' alt="User" />
            </div>
            <Button
                theme={"Primary"}
                click={props.click}>
                {props.buttonText} 
            </Button> 
        </div>
    )
}