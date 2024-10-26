import { Container, Title } from "@/components/shared";
export default function ProductPage({
  params: { id },
}: {
  params: { id: string };
}) {
  return (
    <>
      <Container className="mt-10">
        <Title text={`Страница ${id}`} size="lg" className="font-extrabold" />
      </Container>
    </>
  );
}
