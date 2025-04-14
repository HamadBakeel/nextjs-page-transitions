import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import toast from 'react-hot-toast';
import { useState } from 'react'

export default function PageTransitionModal({setSelectedTransition}) {
  let [isOpen, setIsOpen] = useState(false)

  function changeSelectedTransition(transitionName){
    setSelectedTransition(transitionName);
    toast.success(`Page transition is set to ${transitionName} now!`, {
      duration: 4000,
      position: 'top-center',
      style: {
        background: '#333',
        color: '#fff',
      },
    });
  }

  function open() {
    setIsOpen(true)
  }

  function close() {
    setIsOpen(false)
  }

  return (
    <>
      <Button
        onClick={open}
        className="rounded-md bg-primary py-2 px-4 text-sm font-medium text-white focus:outline-none data-[hover]:bg-primary/30 data-[focus]:outline-1 data-[focus]:outline-black fixed bottom-4 right-4 z-10"
      >
        Change Page Transition
      </Button>

      <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close} __demoMode>
        <div className="fixed inset-0 z-50 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 bg-black bg-opacity-50">
            <DialogPanel
              transition
              className="w-full max-w-md rounded-xl shadow-xl bg-white p-6 backdrop-blur-2xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
            >
              <DialogTitle as="h3" className="text-base/7 text-black font-bold text-center">
                Page Transitions
              </DialogTitle>
              <div className="mt-4 flex gap-4">
                <Button
                  className="flex-1 rounded-md bg-gray-700 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={()=>changeSelectedTransition('inner')}
                >
                  Inner
                </Button>
                <Button
                  className="flex-1 rounded-md bg-gray-700 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={()=>changeSelectedTransition('curve')}
                >
                  Curve
                </Button>
                <Button
                  className="flex-1 rounded-md bg-gray-700 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-gray-600 data-[focus]:outline-1 data-[focus]:outline-white data-[open]:bg-gray-700"
                  onClick={()=>changeSelectedTransition('stairs')}
                >
                  Stairs
                </Button>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  )
}
