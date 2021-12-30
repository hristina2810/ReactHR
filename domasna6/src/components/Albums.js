import React from 'react';

export class Albums extends React.Component{
constructor(props){
super(props);

this.state={ albums:[]}


}
render() {   //Кога имаме render знаеме дека е класна компонента.
    return(
        <div id="albums">
            <h2>Albums</h2>
            {this.state.albums.length > 0 ? 
            <table border="1">
              <thead>
                  <tr>
                      <th>AlbumID</th> 
                      <th>UserID</th>
                      <th>Title</th>
                  </tr>
              </thead>
              <tbody>
                  {this.state.albums.map((album)=> {
                      return(
                          <tr key={album.id}>
                              <td>{album.albumId}</td>
                              <td>{album.id}</td>
                              <td>{album.title}
                              </td>
                              </tr>
                                )
                           })}
               </tbody>
         </table> : <h2>Loading...</h2>}
        </div>
    )
}

}