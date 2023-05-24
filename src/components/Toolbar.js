import '../assets/toolbar.css'

function Toolbar({filters, selected, onSelectFilter}) {

  const buttons = filters.map(filter =>
    <button key={ filter } className={ selected === filter ? 'selected btn' : 'btn' } onClick={ () => onSelectFilter(filter) }>{ filter }</button>
  )

  return (

    <div className='toolbar'>
      { buttons }
    </div>
  )
}

export default Toolbar