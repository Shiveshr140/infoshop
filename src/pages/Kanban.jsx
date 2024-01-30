import React, { useState } from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';
import { Header } from '../components';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Form from '../components/Form';
import { useStateContext } from '../contexts/ContextProvider';
import { MdDeleteOutline } from "react-icons/md";


const Kanban = () => {
  const {
    currentColor,
    tasks,
    setTasks,
    formDataTodo,
    formDataDone,
    formDataProgress,
    handleInputTodo,
    handleInputProgress,
    handleInputDone,
    handleFormSubmitTodo,
    handleFormSubmitProgress,
    handleFormSubmitDone,
  } = useStateContext();
  
  const { Todo, Progress, Done } = tasks
  const [formVisible, setFormVisible] = useState({
    Todo: false,
    Progress: false,
    Done: false,
  });
  const onDragEnd = (result) => {
    const { source, destination } = result;
    
    if (!destination) return;
    if (source.droppableId === destination.droppableId && source.index === destination.index) return;

    let add,
    todo = tasks.Todo,
    progress = tasks.Progress,
    done = tasks.Done

    if(source.droppableId==='Todo'){
      add = todo[source.index]
      todo.splice(source.index,1)
    }else if(source.droppableId==='Progress'){
      add = progress[source.index]
      progress.splice(source.index,1)
    }else{
      add = done[source.index];
      done.splice(source.index,1)
    }

    //// adding to destination

    if(destination.droppableId==='Todo'){
      todo.splice(destination.index,0, add)
    }else if(destination.droppableId==='Progress'){
      progress.splice(destination.index,0, add)
    }else{
      done.splice(destination.index,0, add)
    }

   setTasks(prev=>{
    return {...prev, todo, progress, done}
   })
  };

  const handleClick = (e) => {
    setFormVisible((prev) => {
      return { ...prev, [e.target.name]: !prev[e.target.name] };
    });
  };

  const onDelete = (listName, id) => {
    setTasks((prev) => {
      return {
        ...prev,
        [listName]: prev[listName].filter((item) => item.id !== id),
      };
    });
  };
  
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <div className="mt-24 md:m-10  p-2 md:p-10 bg-white rounded-3xl">
        <Header className='mb-24' category="App" title="Kanban" />
        
        <Grid container spacing={3} style={{ marginTop: '10px' }}>

          <Droppable droppableId='Todo'>
            {(provided) => (
              <Grid key={1} item xs={4} droppableId='Todo' ref={provided.innerRef} {...provided.droppableProps}>
                <Typography variant="h6">To Do
                <button className={`ml-4 w-10 h-10 rounded-full  border-solid border-2 `} style={{borderColor:currentColor, marginBottom:'10px'}}
                  name='Todo' onClick={handleClick} >{formVisible.Todo ? '-': '+'}</button>
                 {formVisible.Todo &&  <Form  prop={handleFormSubmitTodo} propIn={formDataTodo} propChange={handleInputTodo}  />}
                </Typography>

                {Todo.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <Card
                        className='mb-5'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={task.id}
                      >
                        <CardContent>
                          <div className='flex justify-between'>
                          <Typography variant="body2">{`Task ${index + 1}`}</Typography>
                          <button name='Todo' onClick={() => onDelete('Todo', task.id)} style={{padding:'5px 5px'}}> <MdDeleteOutline name='Todo' /> </button>
                        </div>
                     </CardContent>
                        <Typography variant="body2" color="text-xs" style={{ margin: '5px 10px 10px 10px' }}>
                          {task.content}
                        </Typography>
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>

          <Droppable droppableId='Progress'>
            {(provided) => (
              <Grid key={2} item xs={4} droppableId='Progress' ref={provided.innerRef} {...provided.droppableProps}>
                <Typography variant="h6">In Progress
                <button className={`ml-4 w-10 h-10 rounded-full  border-solid border-2 `} style={{borderColor:currentColor, marginBottom:'10px'}}
                 name='Progress' onClick={handleClick}  >{formVisible.Progress ? '-': '+'}</button>
                 {formVisible.Progress &&  <Form  prop={handleFormSubmitProgress} propIn={formDataProgress} propChange={handleInputProgress} />}
                </Typography>

                {Progress.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <Card
                        className='mb-5'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={task.id}
                      >
                        <CardContent>
                          <div className='flex justify-between'>
                          <Typography variant="body2" >{`Task ${index + Todo.length +1}`}</Typography>
                          <button name='Progress' onClick={() => onDelete('Progress', task.id)} style={{padding:'5px 5px'}}> 
                                     <MdDeleteOutline /> </button>
                          </div>
                        </CardContent>
                        <Typography variant="body2" color="text-xs" style={{ margin: '5px 10px 10px 10px' }}>
                          {task.content}
                        </Typography>
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>

          <Droppable droppableId='Done'>
            {(provided) => (
              <Grid key={3} item xs={4} droppableId='Done' ref={provided.innerRef} {...provided.droppableProps}>
                <Typography variant="h6">Done
                <button name='Done' className={`ml-4 w-10 h-10 rounded-full  border-solid border-2 `} style={{borderColor:currentColor, marginBottom:'10px'}}
                  onClick={handleClick} > {formVisible.Done ? '-': '+'} </button>
                 {formVisible.Done &&  <Form  prop={handleFormSubmitDone} propIn={formDataDone} propChange={handleInputDone}  />}
                </Typography>

                {Done.map((task, index) => (
                  <Draggable key={task.id} draggableId={task.id} index={index}>
                    {(provided) => (
                      <Card
                        className='mb-5'
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        key={task.id}
                      >
                        <CardContent>
                          <div className='flex justify-between'>
                          <Typography variant="body2" className='text-xs'>{`Task ${index + Progress.length + Todo.length + 1}`}</Typography>
                          <button name='Done' onClick={() => onDelete('Done', task.id)} style={{padding:'5px 5px'}}> 
                                  <MdDeleteOutline /> </button>
                          </div>
                        </CardContent>
                        <Typography variant="body2" color="text.secondary" style={{ margin: '5px 10px 10px 10px' }}>
                          {task.content}
                        </Typography>
                      </Card>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </Grid>
            )}
          </Droppable>

        </Grid>
      </div>
    </DragDropContext>
  );
};

export default Kanban;



