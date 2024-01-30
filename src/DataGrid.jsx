// import { DataGrid } from '@mui/x-data-grid';
// import { Box } from '@mui/material';
// // import {useDemoData} from '@mui/x-data-grid-generator'
// import ecommerce from './data/Ecommerce.jpg'

// const ImgCell = ({Source})=>{
//     return (
//         <img src={Source}/>
//     )
// }

// export default function Gridmaker(){
   
//     const fields = [
//         {field: 'fname', headerName:'First Name', width:240, headerAlign:'center' },
//         {field: 'lname', headerName:'Last Name', width:140 },
//         {field: 'Img', headerName:'Image', renderCell: (params) => <ImgCell Source={params.value}  />, width:140 }
//     ]

//     const rows = [
//         {id:1, fname:'Shivesh', lname:'Rajput', Img: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" , type:'Image',},
//         {id:2, fname:'Shivesh', lname:'Rajput', Img: "https://images.unsplash.com/photo-1576618148400-f54bed99fcfd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80" , type:'Image'}
//     ]
//     return(
//         <Box sx={{mx:'auto'}}>
//             <DataGrid  rows={rows} columns={fields}  />
//             {/* <DataGrid {...data}  /> */}
            
//         </Box>
//     )
// }


// import * as React from "react";
// import { DataGrid } from "@mui/x-data-grid";

// const columns = [
//   {
//     field: "image",
//     headerName: "image",
//     width: 550,
//     height: 550,
//     renderCell: (params) => <img src={params.value} />
//   }
// ];

// const rows = [
//   {
//     id: 1,
//     image:
//       "https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg"
//   },
//   {
//     id: 2,
//     image:
//       "https://image.shutterstock.com/image-photo/small-juicy-hamburger-canapes-on-260nw-570368917.jpg"
//   }
// ];

// export default function RenderCellGrid() {
//   return (
//     <div style={{ height: 500, width: "100%" }}>
//       <DataGrid rows={rows} columns={columns} />
//     </div>
//   );
// }

import React from 'react'

const DataGrid = () => {
  return (
    <div>DataGrid</div>
  )
}

export default DataGrid




// import React, { useState } from 'react';
// import { Card, CardContent, Typography, Grid } from '@mui/material';
// import { Header } from '../components';
// import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
// import Form from '../components/Form';
// import { useStateContext } from '../contexts/ContextProvider';

// const Kanban = () => {
//   const {currentColor, FormData} = useStateContext()
//   const [tasks, setTasks] = useState({
//     Todo: [
//       { id: '1', content: 'Arrange a web meeting with the customer to get new requirements.' },
//       { id: '2', content: 'Show the retrieved data from the server in grid control.' },
//       { id: '3', content: 'Show the retrieved data from the server in grid control.' },
//     ],
//     Progress: [
//       { id: '4', content: 'Fix the issues reported in the IE browser.' },
//       { id: '5', content: "Fix cannot open user's default database SQL error." },
//       { id: '6', content: 'Improve the performance of the editing functionality.' },
//     ],
//     Done: [
//       { id: '7', content: 'Improve the performance of the editing functionality.' },
//       { id: '8', content: 'Hello.' },
//     ],
//   });
//   const [formVisible, setFormVisible] = useState(false)

//   const onDragEnd = (result) => {
//     const { source, destination } = result;
    
//     if (!destination) return;
//     if (source.droppableId === destination.droppableId && source.index === destination.index) return;

//     let add,
//     todo = tasks.Todo,
//     progress = tasks.Progress,
//     done = tasks.Done

//     if(source.droppableId==='Todo'){
//       add = todo[source.index]
//       todo.splice(source.index,1)
//     }else if(source.droppableId==='Progress'){
//       add = progress[source.index]
//       progress.splice(source.index,1)
//     }else{
//       add = done[source.index];
//       done.splice(source.index,1)
//     }

//     //// adding to destination

//     if(destination.droppableId==='Todo'){
//       todo.splice(destination.index,0, add)
//     }else if(destination.droppableId==='Progress'){
//       progress.splice(destination.index,0, add)
//     }else{
//       done.splice(destination.index,0, add)
//     }

//    setTasks(prev=>{
//     return {...prev, todo, progress, done}
//    })
//   };

//   const handleClick= ()=>{
//     setFormVisible(prev=> !prev)
//   }
  
//   return (
//     <DragDropContext onDragEnd={onDragEnd}>
//       <div className="m-2 md:m-10 mt-4 p-2 md:p-10 bg-white rounded-3xl">
//         <Header className='mb-24' category="App" title="Kanban" />
        
//         <Grid container spacing={3} style={{ marginTop: '10px' }}>

//           <Droppable droppableId='Todo'>
//             {(provided) => (
//               <Grid item xs={4} droppableId='Todo' ref={provided.innerRef} {...provided.droppableProps}>
//                 <Typography variant="h6">To Do
//                 <button className={`ml-4 w-10 h-10 rounded-full  border-solid border-2 `} style={{borderColor:currentColor}}
//                   onClick={handleClick}  >+</button>
//                  {formVisible &&  <Form style={{zIndex:'1000'}} />}
//                 </Typography>

//                 {tasks.Todo.map((task, index) => (
//                   <Draggable key={task.id} draggableId={task.id} index={index}>
//                     {(provided) => (
//                       <Card
//                         className='mb-5'
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         // Only attach dragHandleProps to the element you want to be the drag handle
//                         // In this case, it's the Card itself
//                         {...provided.dragHandleProps}
//                       >
//                         <CardContent>
//                           <Typography variant="body2">{`Task ${index + 1}`}</Typography>
//                         </CardContent>
//                         <Typography variant="body2" color="text.secondary" style={{ margin: '10px' }}>
//                           {task.content}
//                         </Typography>
//                       </Card>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </Grid>
//             )}
//           </Droppable>

//           <Droppable droppableId='Progress'>
//             {(provided) => (
//               <Grid item xs={4} droppableId='Progress' ref={provided.innerRef} {...provided.droppableProps}>
//                 <Typography variant="h6">In Progress
//                 <button className={`ml-4 w-10 h-10 rounded-full  border-solid border-2 `} style={{borderColor:currentColor}}
//                   onClick={handleClick}  >+</button>
//                  {formVisible &&  <Form style={{zIndex:'1000'}} />}
//                 </Typography>

//                 {tasks.Progress.map((task, index) => (
//                   <Draggable key={task.id} draggableId={task.id} index={index}>
//                     {(provided) => (
//                       <Card
//                         className='mb-5'
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                       >
//                         <CardContent>
//                           <Typography variant="body2">{`Task ${index + 4}`}</Typography>
//                         </CardContent>
//                         <Typography variant="body2" color="text.secondary" style={{ margin: '10px' }}>
//                           {task.content}
//                         </Typography>
//                       </Card>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </Grid>
//             )}
//           </Droppable>

//           <Droppable droppableId='Done'>
//             {(provided) => (
//               <Grid item xs={4} droppableId='Done' ref={provided.innerRef} {...provided.droppableProps}>
//                 <Typography variant="h6">Done
//                 <button className={`ml-4 w-10 h-10 rounded-full  border-solid border-2 `} style={{borderColor:currentColor}}
//                   onClick={handleClick}  >+</button>
//                  {formVisible &&  <Form style={{zIndex:'1000'}} />}
//                 </Typography>

//                 {tasks.Done.map((task, index) => (
//                   <Draggable key={task.id} draggableId={task.id} index={index}>
//                     {(provided) => (
//                       <Card
//                         className='mb-5'
//                         ref={provided.innerRef}
//                         {...provided.draggableProps}
//                         {...provided.dragHandleProps}
//                       >
//                         <CardContent>
//                           <Typography variant="body2">{`Task ${index + 7}`}</Typography>
//                         </CardContent>
//                         <Typography variant="body2" color="text.secondary" style={{ margin: '10px' }}>
//                           {task.content}
//                         </Typography>
//                       </Card>
//                     )}
//                   </Draggable>
//                 ))}
//                 {provided.placeholder}
//               </Grid>
//             )}
//           </Droppable>

//         </Grid>
//       </div>
//     </DragDropContext>
//   );
// };

// export default Kanban;



