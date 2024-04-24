import { FaCheckCircle, FaCircleCheck } from 'react-icons/fa'
import '../../App.css'
const ProgressButton = ({ step }) => {

  return (
    <>
      <div className="flex justify-center items-center">
        <ol class="flex items-center gap-x-2 sm:gap-x-4 justify-center w-[90%] text-sm font-medium text-center text-gray-500 dark:text-gray-400 sm:text-sm">
          <li class="flex md:w-full items-center text-gray-500 dark:text-gray-600 sm:after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block xl:after:mx-10 dark:after:border-gray-700">
            {step === 1 &&
              <span class="flex items-center gap-x-1 sm:gap-x-2 font-bold text-sm sm:text-xl after:content-['/'] sm:after:hidden text-black">
                <span class="rounded-full w-6 sm:w-8 inline-block bg-yellow-500 text-black text-[14px] font-bold p-1 text-center button-style-progress-button">1</span>
                <span>Details</span>
              </span>
            }

            {(step > 1) &&
              <span class="flex items-center text-md font-semibold after:content-['/'] sm:after:hidden after:text-gray-400 dark:after:text-gray-900">

                <span> <FaCheckCircle className='h-6 w-6 text-yellow-500 mr-2' /></span>
                Details


              </span>
            }
          </li>
          <li class="flex md:w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-200 after:border-1 after:hidden sm:after:inline-block xl:after:mx-10 dark:after:border-gray-700">
            {(step === 2 || step === 1) &&
              <span class="flex items-center gap-x-1 sm:gap-x-2 font-bold text-sm sm:text-xl after:content-['/'] sm:after:hidden text-black">
                <span class="rounded-full w-6 sm:w-8 inline-block text-black text-[14px] font-bold p-1 text-center button-style-progress-button">2</span>
                <span>Ameneties</span>
              </span>
            }

            {step > 2 &&
              <span class="flex items-center text-md font-semibold after:content-['/'] sm:after:hidden after:mx-2 after:text-gray-400 dark:after:text-gray-900">
                <span> <FaCheckCircle className=' h-6 w-6 text-yellow-500 mr-2' /></span>
                Ameneties
              </span>
            }
          </li>
          <li class="flex items-center">
            {(step === 3 || step === 2 || step === 1) &&
              <span class="flex items-center gap-x-1 sm:gap-x-2 font-bold text-sm sm:text-xl text-black">
                <span class="rounded-full w-6 sm:w-8 inline-block text-black text-[14px] font-bold p-1 text-center button-style-progress-button">3</span>
                <span>Upload</span>
              </span>
            }

            {step > 3 &&
              <span class="flex items-center text-md font-semibold sm:after:hidden after:mx-2 after:text-gray-400 dark:after:text-gray-900">

                <span> <FaCheckCircle className=' h-6 w-6 text-yellow-500 mr-2' /></span>
                Upload
              </span>
            }
          </li>
        </ol>
      </div>
    </>

  )
}

export default ProgressButton;