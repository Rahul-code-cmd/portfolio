
import { useMyContext } from '../hooks/context';
import plusimage from '../icons/plus.svg'

const Card = () => {

    const {cards}=useMyContext()
    console.log(cards,"itemsdata");
    

  return (
    <section className='cards p50'>
        <div className="container">
            <div className="row g-3 justify-content-center">
              {
                cards.map((value,index)=>(
                    <div className="col-lg-4" key={index}>
                    <div className='innercard'>
                        <div className="cardPlusimage">
                            {/* <img src={value?.img} alt="image" /> */}
                        </div>
                        <h2>{value?.name}</h2>
                        <p>{value?.para}</p>
                    </div>
                </div>
                ))
              }
            </div>
        </div>
      
    </section>
  )
}

export default Card
