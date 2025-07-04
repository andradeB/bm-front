import LoginForm from '../components/LoginForm';

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-md w-80">
        <h1 className="text-lg font-bold mb-4 text-center">Login</h1>
        <LoginForm />
      </div>
    </div>
  );
}
