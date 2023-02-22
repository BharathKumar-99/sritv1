
import Layout from 'src/components/Layout'


export default function Home() {
  return (
    <Layout title="HomePage">
      <div>
        <p className='text-3xl p-4'>Notice</p>
      </div>
      <div className='h-48 bg-text_grey m-4'>

      </div>
      <div className="w-full  grid grid-cols-4  gap-6 mx-auto ">
        <div className="shadow p-5 rounded-lg border-t-4 ">
          <p className="uppercase text-sm font-medium text-gray-500">
            1 Month
          </p>
          <p className="mt-4 text-3xl text-gray-700 font-medium">
            Price
          </p>
          <p className="mt-4 font-medium text-gray-700">
            Up to 5 listing monthly
          </p>

          <div className="mt-8">
            <ul className="grid grid-cols-1 gap-4">
              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>

                20 days only
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>

                Weekly email newsletter
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>

                Quota renewed monthly
              </li>
            </ul>
          </div>
        </div>

        <div className="shadow p-5 rounded-lg border-t-4 border-green-400 bg-white">
          <p className="uppercase text-sm font-medium text-gray-500">
            3 Months
          </p>

          <p className="mt-4 text-3xl text-gray-700 font-medium">
            Price
          </p>

          <p className="mt-4 font-medium text-gray-700">
            When free quota fully used
          </p>

          <div className="mt-8">
            <ul className="grid grid-cols-1 gap-4">
              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>

                30 days only
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>

                Twice weekly email newsletter
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>

                Social feed share (3 platforms)
              </li>
            </ul>
          </div>


        </div>
        <div className="shadow p-5 rounded-lg border-t-4 border-green-400 bg-white">
          <p className="uppercase text-sm font-medium text-gray-500">
            6 Months
          </p>

          <p className="mt-4 text-3xl text-gray-700 font-medium">
            Price
          </p>

          <p className="mt-4 font-medium text-gray-700">
            Up to 5 listing monthly
          </p>

          <div className="mt-8">
            <ul className="grid grid-cols-1 gap-4">
              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>

                20 days only
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>

                Weekly email newsletter
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>

                Quota renewed monthly
              </li>
            </ul>
          </div>
        </div>

        <div className="shadow p-5 rounded-lg border-t-4 border-green-400 bg-white">
          <p className="uppercase text-sm font-medium text-gray-500">
            1 Year
          </p>

          <p className="mt-4 text-3xl text-gray-700 font-medium">
            Price
          </p>

          <p className="mt-4 font-medium text-gray-700">
            When free quota fully used
          </p>

          <div className="mt-8">
            <ul className="grid grid-cols-1 gap-4">
              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>

                30 days only
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>

                Twice weekly email newsletter
              </li>

              <li className="inline-flex items-center text-gray-600">
                <svg className="w-4 h-4 mr-2 fill-current text-green-400" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM371.8 211.8l-128 128C238.3 345.3 231.2 348 224 348s-14.34-2.719-19.81-8.188l-64-64c-10.91-10.94-10.91-28.69 0-39.63c10.94-10.94 28.69-10.94 39.63 0L224 280.4l108.2-108.2c10.94-10.94 28.69-10.94 39.63 0C382.7 183.1 382.7 200.9 371.8 211.8z"></path>
                </svg>

                Social feed share (3 platforms)
              </li>
            </ul>
          </div>


        </div>
      </div>
      <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">
        Payment History</h2>
      <ul className="max-w-md space-y-1 text-gray-500 list-disc list-inside dark:text-gray-400">
        <li>
          Payment 1
        </li>
        <li>
          Payment 2
        </li>
        <li>
          Payment 3
        </li>
      </ul>



    </Layout>
  );
}

