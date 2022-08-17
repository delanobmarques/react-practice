import Excuse from '../components/excuse.component';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const ExcusePage = () => {
    const queryClient = new QueryClient();

  return (
    <>
        <h1 style={{padding:"1rem"}}>Excuse</h1>
        <QueryClientProvider client={queryClient}>
            <Excuse />
        </QueryClientProvider>
    </>
  )
}

export default ExcusePage