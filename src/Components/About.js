// // import React from 'react';
// // import founder1 from '../assets/founder1.jpg'
// // import founder2 from '../assets/founder2.jpg'

// // // A single profile card component
// // const ProfileCard = ({ name, role, image }) => {
// //   return (
// //     <div className="max-w-md rounded overflow-hidden shadow-lg bg-white m-4">
// //       <img className="w-screen h-screen relative" src={image} alt={`${name}`} />
// //       <div className="px-6 py-4 absolute">
// //         <div className="font-bold text-xl mb-2">{name}</div>
// //         <p className="text-gray-700 text-base">
// //           {role}
// //         </p>
// //       </div>
// //     </div>
// //   );
// // };

// // // The main component that uses the ProfileCard component
// // const InternshipSection = () => {
// //   return (
// //     <div className="flex justify-center items-start bg-white p-10">
// //       <ProfileCard
// //         name="Hammad Sheikh"
// //         role="Founder"
// //         image={founder1}// Replace with the actual path
// //       />
// //       <div className="flex flex-col justify-between bg-purple-600 text-white w-dvw h-screen  shadow-md p-12 m-4">
// //         <div>
// //           <h2 className="text-3xl font-bold mb-4">Welcome to Internee.pk</h2>
// //           <p className="mb-4">
      
// //            Our internship program is designed to give students the opportunity to work on meaningful projects and tasks, while also receiving mentorship and guidance from experienced professionals in the field. Our goal is to help interns develop the skills and knowledge they need to succeed in their careers, while also building a strong network of talented individuals who may become valuable members of our team in the future. If you're looking for a challenging and rewarding internship experience, we invite you to explore our program and Apply Today
// //           </p>

// //         </div>
 
// //       </div>
// //       <ProfileCard
// //         name="Rayyan Zain"
// //         role="CMO"
// //         image={founder2} // Replace with the actual path
// //       />
// //     </div>
// //   );
// // };

// // export default InternshipSection;
// import React from 'react';
// import founder1 from '../assets/founder1.jpg'
// import founder2 from '../assets/founder2.jpg'

// // ProfileCard component represents each individual profile card
// const ProfileCard = ({ name, title, imageUrl }) => {
//   return (
//     <div className="flex flex-col items-center justify-center bg-white p-6 rounded-lg shadow-lg">
//       <img src={imageUrl} alt={name} className="rounded-full h-32 w-32 object-cover" />
//       <h3 className="mt-4 text-lg font-semibold">{name}</h3>
//       <p className="text-sm text-gray-600">{title}</p>
//     </div>
//   );
// };

// // MainSection component represents the central part of the layout with text and buttons
// const MainSection = () => {
//   return (
//     <div className="bg-purple-600 text-white p-6 rounded-lg shadow-lg flex flex-col justify-between">
//       <div>
//         <h1 className="text-2xl font-bold">Welcome to Internee.pk</h1>
//         <p className="mt-4">
//           Our internship program is designed to give students the opportunity to work on meaningful projects and tasks, while also receiving mentorship and guidance from experienced professionals in the field.
//         </p>
//         {/* Other text */}
//       </div>
//       <div className="flex mt-4">
//         <a href="#get-to-know-us" className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold mr-2">Get to know us</a>
//         <a href="#explore-internships" className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold">Explore Internships</a>
//       </div>
//     </div>
//   );
// };

// // The overall layout component
// const InternshipLayout = () => {
//   return (
//     <div className="flex justify-around items-start bg-gray-100 p-10">
//       <ProfileCard
//         name="Hammad Sheikh"
//         title="Founder"
//         imageUrl={founder1} // Replace with actual image path
//       />
//       <MainSection />
//       <ProfileCard
//         name="Rayyan Zain"
//         title="CMO"
//         imageUrl={founder2}  // Replace with actual image path
//       />
//     </div>
//   );
// };

// export default InternshipLayout;


// import React from 'react';
// import founder1 from '../assets/founder1.jpg'
// import founder2 from '../assets/founder2.jpg'

// // Individual card component for the team members
// const TeamMemberCard = ({ name, role, imageUrl }) => {
//   return (
//     <div className="flex flex-col items-center bg-white rounded-lg shadow p-4">
//       <img className="rounded-full h-32 w-32 object-cover" src={imageUrl} alt={`${name}`} />
//       <h3 className="mt-4 text-lg font-semibold">{name}</h3>
//       <p className="text-sm text-gray-500">{role}</p>
//     </div>
//   );
// };

// // Main component for the section
// const InternshipSection = () => {
//   return (
//     <div className="flex w-full">
//       <TeamMemberCard 
//         name="Hammad Sheikh" 
//         role="Founder" 
//         imageUrl={founder1} // Replace with the actual path to the image
//       />
      
//       <div className="flex flex-col justify-between bg-purple-600 text-white p-8 w-full mx-4">
//         <div>
//           <h2 className="text-2xl font-bold">Welcome to Internee.pk</h2>
//           <p className="mt-4">
//             Our internship program is designed to give students the opportunity to work on meaningful projects and tasks, while also receiving mentorship and guidance from experienced professionals in the field.
//             {/* ... additional text ... */}
//           </p>
      
//         </div>
     
//       </div>
      
//       <TeamMemberCard 
//         name="Rayyan Zain" 
//         role="CMO" 
//         imageUrl={founder2} // Replace with the actual path to the image
//       />
//     </div>
//   );
// };

// export default InternshipSection;
import React from 'react';
import founder1 from '../assets/founder1.jpg';
import founder2 from '../assets/founder2.jpg';

// Individual card component for the team members
const TeamMemberCard = ({ name, role, imageUrl }) => {
    const imageClasses = imageUrl === founder1
    ? "md:rounded-bl-lg md:rounded-tl-lg rounded-t-lg"  // Founder 1 image classes
    : "md:rounded-br-lg md:rounded-tr-lg rounded-b-lg"; // Founder 2 image classes
  return (
    <>
    <div className="flex flex-col items-center = rounded-lg shadow-xl mt-4 relative  ">
        <div className='w-full h-auto'>
            <img className ={ ` ${imageClasses} w-[650px] h-[635px] `} src={imageUrl} alt={`${name}`} />


        </div>

   
        <div className='absolute bottom-16 bg-purple-600 px-8 w-[250px] h-[100px] py-5 rounded-3xl'>          
            <h3 className="text-2xl text-white font-bold">{name}</h3>
            <p className="text-base text-white">{role}</p>
        </div>

    </div>
    </>
  );
};

// Main component for the section
const InternshipSection = () => {
  return (
    <div  className="md:flex md:flex-row md:justify-between w-[1400px]  md:mt-14 -mt-36 ml-[4.35%] flex flex-col  ">
     <div  className='md:w-[650px] md:h-[650px] w-[335px] -ml-[0.15rem] md:mx-3'>
        <TeamMemberCard 
          name="Hammad Sheikh" 
          role="Founder" 
          imageUrl={founder1}
    
        />
     
     </div >

      <div name="about" className=" bg-[#b3bae1] text-white md:p-16 p-8 md:mx-4 mx-2 -ml-[0.05rem]  mt-4  shadow-xl md:w-[100%] w-[335px]">
        <div className='text-center mt-16'>
          <p className="text-[2.75rem] text-[#28395A]  font-bold ">Welcome to Internee.pk</p>
          <p className="mt-4 text-justify text-[#28395A] text-[1.15rem] ">
          Our internship program is designed to give students the opportunity to work on meaningful projects and tasks, while also receiving mentorship and guidance from experienced professionals in the field. Our goal is to help interns develop the skills and knowledge they need to succeed in their careers, while also building a strong network of talented individuals who may become valuable members of our team in the future. If you're looking for a challenging and rewarding internship experience, we invite you to explore our program and Apply Today
          
          </p>
         
        </div>
        <button className=' mt-7 -ml-1 bg-transparent rounded-full p-3 border-2 border-black text-[#28395A] font-semibold md:hover:shadow-xl md:hover:shadow-purple-800'>
           Get to Know US 
        </button>

      </div>
      
    <div className='md:w-[650px] md:h-[650px] w-[335px] -ml-[0.15rem] md:mx-3'>
        <TeamMemberCard 
          name="Rayyan  Zain" 
          role="CMO" 
          imageUrl={founder2}

        />
     </div>

    </div>
  );
};

export default InternshipSection;

