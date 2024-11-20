interface ErrorStateProps {
    message: string;
  }
  
  export function ErrorState({ message }: ErrorStateProps) {
    return <div className="text-red-500">Error: {message}</div>;
  }
  