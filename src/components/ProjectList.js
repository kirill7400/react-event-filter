import '../assets/projectList.css'

function ProjectList({ projects }) {
  const images = projects.map((image, i) =>
    <img className='img' key={ i } src={ image.img } alt={ image.category }/>
  )

  return (
    <div className='projectList'>{ images }</div>
  )
}

export default ProjectList