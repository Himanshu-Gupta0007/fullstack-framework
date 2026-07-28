type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function UserPage({ params }: Props) {
  const { id } = await params;

  return (
    <div>
      <h1>User ID: {id}</h1>
      
    </div>
  );
}