const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
 
  await prisma.Message.update({
    where: { id: 1 }, 
    data: {
      title: 'first blog post',
      content: 'hello world',
      comment: 'How are you',
      author: 'Tristan',
      authorId: 1,
    },
  });

  const allMessages = await prisma.Message.findMany();

  console.dir(allMessages, { depth: null });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
