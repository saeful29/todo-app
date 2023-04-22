import { FormEvent, useState } from "react";
import Button from "./components/Button";
import Card from "./components/Card";
import Input from "./components/Input";
import { useStore } from "./store/store";
import IconButton from "./components/IconButton";
import * as AntDesign from "react-icons/ai";
import { AnimatePresence, motion } from "framer-motion";

export default function App() {
  const addTodos = useStore((state) => state.addTodos);
  const removeTodo = useStore((state) => state.removeTodo);
  const updateTodo = useStore((state) => state.updateTodo);
  const [setting, setSettings] = useState<any>([]);
  const [editTodo, setEditTodo] = useState<any>([]);
  const todos = useStore((state) => state.todos);
  const [value, setValue] = useState<string>("");
  const [editValue, setEditValue] = useState<string>("");
  const handleInputTodo = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setValue(value);
  };

  const handleAddTodo = () => {
    if (value.trim().length === 0) return;
    addTodos(value);
    setValue("");
  };

  const handleSetting = (idx: number | number | symbol, status: boolean) => {
    setSettings({ [idx]: !status });
    if (!editTodo[idx] || editTodo[idx]) {
      setEditValue("");
      setEditTodo({ [idx]: false });
    }
  };

  const handleButtonEdit = (idx: number | number | symbol, status: boolean) => {
    setEditTodo({ ...editTodo, [idx]: !status });
  };

  const handleUpdateTodo = (e: FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setEditValue(value);
  };

  const handleDeleteTodo = (id: string) => {
    setSettings([]);
    setEditTodo([]);
    removeTodo(id);
  };

  const handleSaveTodo = (id: string) => {
    if (editValue.trim().length === 0) return;
    updateTodo(id, editValue);
    setEditTodo([]);
    setEditValue("");
  };

  return (
    <div className='h-screen flex justify-center items-center flex-col'>
      <div className='w-12/12 md:w-4/12'>
        <p className='text-2xl font-semibold text-center'>Todo App</p>
        <div className='flex items-center gap-2 mt-5'>
          <Input
            name='todo'
            type='text'
            placeholder='Insert new todo'
            value={value}
            onChange={(e) => handleInputTodo(e)}
          />
          <Button onClick={() => handleAddTodo()}>Submit</Button>
        </div>

        <div className='max-h-[250px] overflow-y-auto mt-5 p-2'>
          <div className='flex flex-col gap-5'>
            <AnimatePresence>
              {todos?.map((item, idx) => (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={item.id}
                >
                  <div className='bg-indigo-500 rounded p-2 min-h-full transition-all'>
                    <div className='relative'>
                      <Card
                        className={`${
                          setting[idx] ? "md:w-[80%] w-[65%]" : "w-full"
                        } absolute z-[2]`}
                      >
                        <div className='flex justify-between items-center'>
                          <p>{item.title}</p>
                          <div className='flex items-center gap-2'>
                            {setting[idx] ? (
                              <motion.div
                                initial={{ opacity: 1 }}
                                animate={{ rotate: 180 }}
                                exit={{ opacity: 0 }}
                              >
                                <IconButton
                                  variant={setting[idx] ? "warning" : "primary"}
                                  onClick={() =>
                                    handleSetting(idx, setting[idx])
                                  }
                                >
                                  <AntDesign.AiOutlineClose />
                                </IconButton>
                              </motion.div>
                            ) : (
                              <motion.div
                                initial={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                              >
                                <IconButton
                                  variant={setting[idx] ? "warning" : "primary"}
                                  onClick={() =>
                                    handleSetting(idx, setting[idx])
                                  }
                                >
                                  <AntDesign.AiFillSetting />
                                </IconButton>
                              </motion.div>
                            )}
                          </div>
                        </div>
                      </Card>
                      {setting[idx] ? (
                        <motion.div
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0 }}
                          className='absolute right-[5px] top-0 h-full'
                        >
                          <div className='flex gap-2 items-center justify-center h-full'>
                            <IconButton
                              variant='success'
                              onClick={() =>
                                handleButtonEdit(idx, editTodo[idx])
                              }
                            >
                              <AntDesign.AiFillEdit />
                            </IconButton>
                            <IconButton
                              variant='danger'
                              onClick={() => handleDeleteTodo(item.id)}
                            >
                              <AntDesign.AiFillDelete />
                            </IconButton>
                          </div>
                        </motion.div>
                      ) : null}
                    </div>
                    {editTodo[idx] ? (
                      <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className='mt-2'
                      >
                        <div className='flex items-center gap-2'>
                          <Input
                            placeholder='Update task'
                            name={`todo-${item.id}`}
                            value={editValue}
                            onChange={(e) => handleUpdateTodo(e)}
                          />
                          <IconButton
                            variant='success'
                            onClick={() => handleSaveTodo(item.id)}
                          >
                            <AntDesign.AiFillSave />
                          </IconButton>
                        </div>
                      </motion.div>
                    ) : null}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
