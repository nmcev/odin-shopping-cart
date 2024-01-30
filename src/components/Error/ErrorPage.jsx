import './style.css'
function ErrorPage() {
    return (
        <div className="containers flex justify-center flex-col items-center h-dvh">
            <h1 className="text-9xl text-creamy font-poppins">404</h1>
            <h2 className="text-4xl  text-creamy font-poppins">PAGE NOT FOUND</h2>

            <p className="text-md  text-red-600 pt-7 font-poppins">Sorry, the page you&apos;re looking for doesn&apos;t exist!</p>

        </div>
  )
}

export default ErrorPage