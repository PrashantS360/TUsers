import Head from 'next/head'
import Image from 'next/image'
import Card from '../components/Card'
import UserDetail from '../components/UserDetail'
import { useEffect, useState } from 'react'
import { RxCross1 } from 'react-icons/rx'

export default function Home() {
  const [users, setUsers] = useState([]);
  const [spinner, setSpinner] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  const getUsers = async () => {
    setSpinner(true);
    let host = process.env.NEXT_PUBLIC_HOST;
    console.log(host);
    if(!host){
      host = "http://localhost:3000"
    }
    
    let res = await fetch(`${host}/api/users`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    })

    const json = await res.json();
    const users = [];
    for (let i = 0; i < json.users.length; i++) {
      if (json.users[i].avatar.includes('fakercloud')) {
        continue;
      }
      users.push(json.users[i]);
    }

    setUsers(users);
    setSpinner(false);
  }

  useEffect(() => {
    getUsers();
  }, [users.length])


  return (
    <div className=''>
      <Head >
        <title>TUsers</title>
        <meta name="description" content="CodesWear.com - Wear the code" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <style jsx>
        {`
          .scrollbar::-webkit-scrollbar-track
          {
          	-webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.6);
          	background-color: #CCCCCC;
          }
          
          .scrollbar::-webkit-scrollbar
          {
          	width: 10px;
          	background-color: #F5F5F5;
          }
          
          .scrollbar::-webkit-scrollbar-thumb
          {
          	background-color: #FFF;
          	background-image: -webkit-linear-gradient(90deg,
          	                                          rgba(0, 0, 0, 1) 0%,
          											  rgba(0, 0, 0, 1) 25%,
          											  transparent 100%,
          											  rgba(0, 0, 0, 1) 75%,
          											  transparent)
          }
        `}
      </style>
      <main className='flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-4 justify-between m-auto w-[80vw]'>
        <div className='md:w-1/2'>
          <h3 className='py-3 mb-4 text-lg rounded-md text-center uppercase bg-blue-200'>Users List</h3>
          <div className='h-[80vh] overflow-y-auto scrollbar'>
            {/* <Card user={{avatar:'/dp.png',name:"Prashant Singh"}}/> */}
            {users.length ?
              users.map((user, index) => {
                return <div key={index} onClick={() => { setSelectedUser(user) }}>
                  <Card user={user} selected={selectedUser === user} />
                </div>
              }) : ""
            }
            {
              users.length == 0 && !spinner && <div className='flex text-xl justify-center items-center min-h-[60vh]'>No user found in our records.</div>
            }
            {spinner && <div className='flex flex-col text-xl justify-center items-center min-h-[60vh]'>
              <Image src={'/loader.gif'} alt={"loader"} height={150} width={80} loader={({ src, width, quality }) => {
                return `${src}?w=${width}&q=${quality || 75}`
            }}/>
              <p className='text-lg text-gray-500'>Loading....</p>
            </div>}
          </div>
        </div>
        <div className='md:w-[40%]'>
          <h3 className='py-3 text-lg rounded-md text-center uppercase bg-blue-200'>User Details</h3>
          {selectedUser && <div>
            <div className='flex justify-end my-2 mx-2 cursor-pointer' onClick={() => { setSelectedUser(null) }}>
              <RxCross1 />
            </div>
            <UserDetail user={selectedUser} />
          </div>}
          {!selectedUser && <div className='flex text-xl justify-center items-center min-h-[60vh]'>Select any user to see his/her profile.</div>}
        </div>
      </main>
    </div>
  )
}
