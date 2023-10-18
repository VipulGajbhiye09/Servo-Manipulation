import Slider1 from './components/Slider';

import './index.css'
function App() {

  return (
    <div className="dark:bg-gray-900 dark:text-white min-h-screen flex flex-col justify-center">
      <section className="dark:bg-gray-900 dark:text-white">
        <h1 className="flex justify-center text-2xl font-medium p-5">
          Upper Body Servo Manipulation
        </h1>
        <div className="flex justify-around items-center  gap-4 m-4">
        
          <Slider1 min={0} max={180} title="Left_Shoulder_Servo" />

          <Slider1 min={0} max={180} title="Left_Elbow_Servo" />

          <Slider1 min={0} max={180} title="Right_Shoulder_Servo" />

          <Slider1 min={0} max={180} title="Right_Elbow_Servo" />
        </div>
      </section>
      <section className="dark:bg-gray-900 dark:text-white">
        <h1 className="flex justify-center text-2xl font-medium p-5 ">
          Lower Body Servo Manipulation
        </h1>
        <div className="flex justify-around items-center  gap-4 m-4">
          <Slider1 min={0} max={180} title="Left_Leg_Servo" />

          <Slider1 min={0} max={180} title="Left_Knee_Servo" />

          <Slider1 min={0} max={180} title="Right_Leg_Servo" />

          <Slider1 min={0} max={180} title="Right_Knee_Servo" />
        </div>
      </section>
    </div>
  );
}

export default App
