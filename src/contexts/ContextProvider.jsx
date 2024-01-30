import {useState, useContext, createContext, useEffect} from 'react'
import {tasks as kanbanData} from '../data/dummy.jsx'



const StateContext = createContext();

const initialState = {
  chat: false,
  cart: false,
  userProfile: false,
  notification: false,
};

export const ContextProvider = ({children})=>{
        const storedTasks = JSON.parse(localStorage.getItem('tasks')) || kanbanData ;
        const storedMode = localStorage.getItem('themeMode') || 'Light'
        const storedColor = localStorage.getItem('colorMode') || "#03C9D7"
        const [activeMenu, setActiveMenu] = useState(true);
        const [isClicked, setIsClicked] = useState(initialState)
        const [screenSize, setScreenSize] = useState(undefined)
        const [themeSettings, setThemeSettings] = useState(false)
        const [currentColor, setCurrentColor] = useState(storedColor)
        const [currentMode, setCurrentMode] = useState(storedMode)
        const [formDataTodo, setFormDataTodo] = useState('')
        const [formDataProgress, setFormDataProgress] = useState('')
        const [formDataDone, setFormDataDone] = useState('')
        const [tasks, setTasks] = useState(storedTasks)

        const setMode = (e)=>{
          console.log(e.target.value)
          setCurrentMode(e.target.value)
          localStorage.setItem('themeMode', e.target.value)

          setThemeSettings(false)
        }
        const setColor = (color)=>{
          setCurrentColor(color)
          localStorage.setItem('colorMode', color)

          setThemeSettings(false)
        }

        const handleClick = (clicked)=>{
            setIsClicked({...activeMenu, [clicked]:true})
        }

        const handleClickNav = (clicked) => {
          setIsClicked((prev) => {
            const updatedState = Object.keys(prev).reduce((acc, key) => {
              acc[key] = key === clicked ? !prev[key] : false;
              return acc;
            }, {});
           updatedState[clicked] = !prev[clicked];
             return updatedState;
          });
        };


        const handleInputTodo = (e) => {
          setFormDataTodo(e.target.value)
        };
        const handleInputProgress = (e) => {
          setFormDataProgress(e.target.value)
        };
        const handleInputDone = (e) => {
          setFormDataDone(e.target.value)
        };

        const handleFormSubmitTodo = (e) => {
          e.preventDefault();
           setTasks((prev) => {
            return { ...prev, Todo: [...prev.Todo, { id: crypto.randomUUID(), content: formDataTodo }] };
          });
          setFormDataTodo('');
          
        };
        
        const handleFormSubmitProgress = (e) => {
          e.preventDefault();
           setTasks((prev) => {
            return { ...prev, Progress: [...prev.Progress, { id: crypto.randomUUID(), content: formDataProgress }] };
          });
          setFormDataProgress('');
        };
        
        const handleFormSubmitDone = (e) => {
          e.preventDefault();
          setTasks((prev) => {
            return { ...prev, Done: [...prev.Done, { id: crypto.randomUUID(), content: formDataDone }] };
          });
          setFormDataDone('');
        };
        
        useEffect(() => {
          localStorage.setItem('tasks', JSON.stringify(tasks));
        }, [tasks]);


        return (
        <StateContext.Provider value={{activeMenu, setActiveMenu, isClicked, 
                                      setIsClicked, handleClick, handleClickNav, screenSize, setScreenSize,
                                      themeSettings, setThemeSettings, 
                                      currentColor, setCurrentColor,
                                      currentMode, setCurrentMode,
                                      setMode, setColor, formDataTodo,formDataDone, formDataProgress,
                                      handleInputTodo,handleInputProgress, handleInputDone, handleFormSubmitTodo,
                                       handleFormSubmitProgress, handleFormSubmitDone,
                                      tasks, setTasks}} >
            {children}
        </StateContext.Provider>
        )
} 

export const useStateContext = ()=> useContext(StateContext)
