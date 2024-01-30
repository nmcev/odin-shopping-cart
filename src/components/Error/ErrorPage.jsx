import './style.css'
function ErrorPage() {
    return (
        <div className="containers flex justify-center flex-col items-center h-dvh">
            <h1 className="text-9xl font-black text-creamy">404</h1>
            <h2 className="text-4xl font-black text-creamy">PAGE NOT FOUND</h2>

            <p className="text-md font-black text-red-600 pt-7">Sorry, the page you're looking for doesn't exist!</p>

        </div>
  )
}

export default ErrorPage