import Draggable, { DraggableEvent, DraggableData } from 'react-draggable';
import { CgMenuRound } from 'react-icons/cg';
import { useState } from 'react';

interface DraggableButtonProps {
  handleToggleSidebar: () => void;
}

export const DraggableButton: React.FC<DraggableButtonProps> = ({ handleToggleSidebar }) => {
  const [startPos, setStartPos] = useState<{ x: number; y: number }>({ x: 0, y: 0 });
  const clickThreshold = 5;

  const handleStart = (e: DraggableEvent, data: DraggableData) => {
    setStartPos({ x: data.x, y: data.y });
  };

  const handleStop = (e: DraggableEvent, data: DraggableData) => {
    const dist = Math.sqrt((data.x - startPos.x) ** 2 + (data.y - startPos.y) ** 2);
    if (dist < clickThreshold) {
      handleToggleSidebar();
    }
  };

  return (
    <Draggable bounds='parent' onStart={handleStart} onStop={handleStop}>
      <div className='fixed bg-[#005FAB] text-[#EFF6FF] rounded-full shadow-md z-[100] flex items-center justify-center w-[35px] h-[35px] top-[56px] left-[12px]'>
        <CgMenuRound size={28} />
      </div>
    </Draggable>
  );
};
