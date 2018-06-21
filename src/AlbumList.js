import React from 'react';
import Card from './Card';
import { albums } from './Albums';

const AlbumList = ({ albums }) => {

  return(
    <div className="container">
      <div className="row">

       {
        albums.map((user,i) => {
        return(

                <div class="col-sm-3">
                  <Card
                     key={i}
                     id={albums[i].id}
                     name={albums[i].name}
                     imgPath={albums[i].imgPath} />
                </div>

               );
          })
        }

    </div>
  </div>
  );
}


export default AlbumList;
