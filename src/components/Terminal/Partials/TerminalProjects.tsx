import React from 'react';

interface ITerminalProjectsProps {
  subColor: string;
}

const TerminalProjects: React.FC<ITerminalProjectsProps> = ({
  subColor,
}): JSX.Element => {
  const projects = [
    {
      name: 'A* Path Finder',
      description:
        'The Path Finder script is a web application that allows users to find the shortest path between a start point and an end point on a grid using the A* algorithm. The grid is represented as a 12x12 matrix, and the start point is marked as yellow, while the endpoint is marked as red. Users can also draw walls on the grid to create obstacles for the pathfinding algorithm.',
      domain: 'https://www.path-finder-inky.vercel.app',
      github: 'https://www.github.com/Biplo12/astar-path-finder',
    },
    {
      name: 'Sorting Algorithms',
      description:
        'This project is a simple representation of how various sorting algorithms work. It provides a visual demonstration of how different algorithms sort an array of elements. The web application displays a graphical representation of the array as bars, and users can select different sorting algorithms to observe their effects on the array.',
      domain: 'https://sorting-algorithms-brown.vercel.app',
      github: 'https://www.github.com/Biplo12/sorting-algorithms',
    },
    {
      name: 'Kamil Sinski - Serwis Komputerowy',
      description:
        'Kamil Sinski Serwis Komputerowy is a computer service company website that has been remade using Tailwind, TypeScript, and Next.js. The website provides various features for both customers and administrators, including order tracking, service information, contact forms, and an admin dashboard for managing orders and users.',
      domain: 'https://www.kamilsinski.pl',
      github:
        'https://github.com/Biplo12/kamil-sinski-serwis-komputerowy-Fullstack',
    },
  ];

  return (
    <div className='mt-3 flex flex-col gap-2'>
      <h1 className='mb-3 text-[2rem] font-bold'>
        Here are some of my projects:
      </h1>
      {projects.map((project, index) => (
        <div key={index} className='flex flex-col gap-2'>
          <h1
            className='text-xl font-bold'
            style={{
              color: subColor,
            }}
          >
            {project.name}
          </h1>
          <p className='text-[1rem]'>{project.description}</p>
          <div className='flex flex-col gap-2'>
            <ul className='list-inside list-disc'>
              <li>
                <a
                  href={project.domain}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:underline'
                  style={{
                    color: subColor,
                  }}
                >
                  Domain
                </a>
              </li>
              <li>
                <a
                  href={project.github}
                  target='_blank'
                  rel='noreferrer'
                  className='hover:underline'
                  style={{
                    color: subColor,
                  }}
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      ))}
      <h3 className='mt-3'>
        All of my projects can be found on my{' '}
        <a
          href='https://github.com/Biplo12?tab=repositories'
          target='_blank'
          rel='noreferrer'
          className='hover:underline'
          style={{
            color: subColor,
          }}
        >
          GitHub
        </a>
      </h3>
    </div>
  );
};
export default TerminalProjects;
