import SignCard from "../components/SignCard";
import signs from "../data/signs";


export default function Home() {

    return (
        <div className="content" id="home">
            <h1>Astro Blog</h1>

            <div className="all-signs">
               
                    {signs.map((s, i) => {
                        return (
                            <SignCard key={i} signs={s} />
                        )
                    })}
               
            </div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Facilisi cras fermentum odio eu feugiat. Malesuada nunc vel risus commodo viverra maecenas accumsan lacus vel. Sociis natoque penatibus et magnis. Id aliquet risus feugiat in ante metus dictum. Id venenatis a condimentum vitae. Amet purus gravida quis blandit turpis cursus in. Vel pharetra vel turpis nunc eget. Purus ut faucibus pulvinar elementum integer enim neque volutpat. Non quam lacus suspendisse faucibus interdum. Sagittis vitae et leo duis. Laoreet id donec ultrices tincidunt arcu non sodales. Mattis pellentesque id nibh tortor id aliquet lectus proin nibh. At consectetur lorem donec massa sapien faucibus et molestie. In aliquam sem fringilla ut morbi tincidunt augue interdum. Euismod in pellentesque massa placerat duis ultricies lacus sed. Blandit aliquam etiam erat velit.</p>

<p>Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing. Neque gravida in fermentum et. Aliquam nulla facilisi cras fermentum odio eu. Quam lacus suspendisse faucibus interdum posuere lorem. Nulla posuere sollicitudin aliquam ultrices. Ipsum faucibus vitae aliquet nec ullamcorper sit amet risus. Diam donec adipiscing tristique risus nec. Ac feugiat sed lectus vestibulum mattis. Risus sed vulputate odio ut enim blandit volutpat. Nibh sit amet commodo nulla facilisi nullam vehicula.</p>

<p>Ac odio tempor orci dapibus ultrices. Massa sed elementum tempus egestas sed sed risus pretium quam. Morbi tristique senectus et netus et malesuada fames. Velit ut tortor pretium viverra suspendisse potenti nullam ac. Placerat in egestas erat imperdiet sed euismod nisi porta. Eget aliquet nibh praesent tristique. Non curabitur gravida arcu ac. Suscipit adipiscing bibendum est ultricies integer quis auctor elit. Massa tincidunt dui ut ornare lectus sit. Ultricies leo integer malesuada nunc vel risus commodo viverra. Ac feugiat sed lectus vestibulum mattis ullamcorper velit. Tristique senectus et netus et malesuada fames ac turpis egestas. Nisl vel pretium lectus quam id. Viverra suspendisse potenti nullam ac tortor vitae purus faucibus ornare. Aliquet nec ullamcorper sit amet risus. Felis eget nunc lobortis mattis aliquam. Et magnis dis parturient montes. Sed velit dignissim sodales ut eu sem. Facilisi morbi tempus iaculis urna.</p>

<p>Faucibus nisl tincidunt eget nullam non. Et pharetra pharetra massa massa ultricies mi quis hendrerit. Amet cursus sit amet dictum sit amet justo donec. Gravida dictum fusce ut placerat orci nulla pellentesque dignissim enim. Ridiculus mus mauris vitae ultricies leo integer malesuada nunc. Suspendisse interdum consectetur libero id faucibus. Sed odio morbi quis commodo odio aenean sed adipiscing. Consequat semper viverra nam libero justo laoreet. Amet consectetur adipiscing elit duis tristique sollicitudin nibh. Orci nulla pellentesque dignissim enim sit amet venenatis urna cursus. Sit amet nisl purus in mollis nunc sed id. Quis enim lobortis scelerisque fermentum dui. In egestas erat imperdiet sed euismod nisi porta lorem. Sit amet purus gravida quis blandit. Euismod nisi porta lorem mollis aliquam ut. Erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Ipsum dolor sit amet consectetur adipiscing elit ut aliquam purus. Maecenas accumsan lacus vel facilisis volutpat est velit. Turpis egestas sed tempus urna et pharetra pharetra.</p>

<p>Vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Vestibulum rhoncus est pellentesque elit ullamcorper. Erat nam at lectus urna duis convallis convallis tellus. Ultricies integer quis auctor elit. Nunc non blandit massa enim nec. Libero volutpat sed cras ornare arcu dui vivamus arcu. Justo eget magna fermentum iaculis eu non. Amet aliquam id diam maecenas ultricies. Orci sagittis eu volutpat odio. Mi ipsum faucibus vitae aliquet nec ullamcorper sit. Metus dictum at tempor commodo ullamcorper. Dui sapien eget mi proin sed libero. Penatibus et magnis dis parturient montes. Vitae elementum curabitur vitae nunc. Urna nunc id cursus metus. Pharetra convallis posuere morbi leo urna molestie at elementum. Sit amet nisl suscipit adipiscing bibendum est ultricies integer.
                </p>
        </div>
    )
    
}