import Card from '../../components/Card';

const Project = ({ project }) => {
  return (
    <Card className="portfolio__project">
      <div className="portfolio__project-image">
        <img src={project.image} alt={`Project: ${project.title}`} />
      </div>
      <h4>{project.title}</h4>
      <p>{project.desc}</p>
      <div className="portfolio__project-cta">
        {project.id === 9 ? (
          <a href={project.url} className="btn sm primary" target="_blank" rel="noopener noreferrer">
            Udemy
          </a>
        ) : project.id === 10 ? (
          <a href={project.youtube} className="btn sm primary" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        ) : (
          <a href={project.github} className="btn sm primary" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        )}
      </div>
    </Card>
  );
};

export default Project;
