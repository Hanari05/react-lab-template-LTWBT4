import { useState } from 'react';

function App() {
  // State lưu trữ danh sách công việc
  const [tasks, setTasks] = useState([
    { id: 1, name: 'Thiết kế giao diện', priority: 'Cao', completed: false },
    { id: 2, name: 'Viết API đăng nhập', priority: 'Trung bình', completed: true },
  ]);
  
  // States cho form thêm mới
  const [taskName, setTaskName] = useState('');
  const [taskPriority, setTaskPriority] = useState('Thấp');

  // Thêm công việc mới
  const handleAddTask = (e) => {
    e.preventDefault();
    const name = taskName.trim();
    if (!name) return; // Không cho thêm nếu tên rỗng
    setTasks([...tasks, { id: Date.now(), name, priority: taskPriority, completed: false }]);
    setTaskName('');
    setTaskPriority('Thấp');
  };

  // Đổi trạng thái hoàn thành
  const handleToggleTask = (id) => {
    setTasks(tasks.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t)));
  };

  // Xóa 1 công việc
  const handleDeleteTask = (id) => {
    setTasks(tasks.filter((t) => t.id !== id));
  };

  // Xóa tất cả công việc đã hoàn thành
  const clearCompletedTasks = () => {
    setTasks(tasks.filter((t) => !t.completed));
  };

  // Thống kê
  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((t) => t.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  return (
    <div style={{ padding: '20px', maxWidth: '600px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center' }}>📋 Bảng Quản Lý Công Việc</h2>
      
      {/* KHU VỰC THỐNG KÊ */}
      <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', flexWrap: 'wrap', background: '#f0f0f0', padding: '15px', borderRadius: '8px', marginBottom: '20px' }}>
        <div><strong>Tổng số công việc:</strong> {totalTasks}</div>
        <div><strong>Số công việc đã hoàn thành:</strong> {completedTasks}</div>
        <div><strong>Số công việc chưa làm:</strong> {pendingTasks}</div>
      </div>

      {/* FORM THÊM CÔNG VIỆC */}
      <form onSubmit={handleAddTask} style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
        <input 
          type="text" 
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Nhập tên công việc..." 
          style={{ flex: 1, padding: '8px' }}
        />
        <select 
          value={taskPriority} 
          onChange={(e) => setTaskPriority(e.target.value)}
          style={{ padding: '8px' }}
        >
          <option value="Cao">Độ ưu tiên: Cao</option>
          <option value="Trung bình">Độ ưu tiên: Trung bình</option>
          <option value="Thấp">Độ ưu tiên: Thấp</option>
        </select>
        <button type="submit" style={{ padding: '8px 15px', background: '#007bff', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Thêm
        </button>
      </form>

      {/* DANH SÁCH CÔNG VIỆC */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {tasks.map((task) => (
          <li 
            key={task.id} 
            style={{ 
              display: 'flex', 
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
              padding: '15px',
              border: '1px solid #ddd',
              borderRadius: '8px',
              opacity: task.completed ? 0.6 : 1,
              background: task.completed ? '#f9f9f9' : '#fff'
            }}
          >
            <div>
              <span style={{ textDecoration: task.completed ? 'line-through' : 'none', fontWeight: 'bold', fontSize: '16px' }}>
                {task.name}
              </span>
              <span style={{ marginLeft: '10px', fontSize: '12px', padding: '3px 8px', background: '#eee', borderRadius: '12px' }}>
                {task.priority}
              </span>
              <span style={{ marginLeft: '8px', fontSize: '12px', color: '#555' }}>
                ({task.completed ? 'Hoàn thành' : 'Chưa làm'})
              </span>
            </div>
            <div>
              <button onClick={() => handleToggleTask(task.id)} style={{ marginRight: '8px', cursor: 'pointer' }}>
                Đổi trạng thái
              </button>
              <button onClick={() => handleDeleteTask(task.id)} style={{ background: '#dc3545', color: 'white', border: 'none', padding: '4px 8px', borderRadius: '4px', cursor: 'pointer' }}>
                Xóa
              </button>
            </div>
          </li>
        ))}
      </ul>

      {/* NÚT XÓA HÀNG LOẠT */}
      {tasks.length > 0 && (
        <button onClick={clearCompletedTasks} style={{ marginTop: '10px', padding: '8px 15px', cursor: 'pointer' }}>
          Xóa các mục đã xong
        </button>
      )}
    </div>
  );
}

export default App;