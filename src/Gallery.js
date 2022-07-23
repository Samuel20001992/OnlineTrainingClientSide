import React from "react";
import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "./gallery.css";
import { Autoplay } from 'swiper';


SwiperCore.use([EffectCoverflow, Pagination]);
// if you want to use array
const slide_img = [
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBcVFBgVFhUSGBgWHRUYFRgVFBEaHBkaGhwcGRwaGB4cITAmHB4rHxoYJzgmKy8xNTU1HCQ7QDszPy40NTEBDAwMEA8QHxISHzYsJCs0NDQ/NDQ1Nj00NjQ0NjQ0NDQ0NDQ0NDY0NDQ0NzQ0NDQ0NjQ0NDQ0NDQ0NDQ0NDQ0NP/AABEIAK4BIgMBIgACEQEDEQH/xAAbAAACAwEBAQAAAAAAAAAAAAAABAEDBQIGB//EAEYQAAEDAgMEBgYIAwYGAwAAAAEAAhESIQMEMQUTQVEiMmFxgZEGFFKhsdEVQlNicpKTwSNU4RaCorLS8AcXM0NzwiQ0Y//EABoBAAMBAQEBAAAAAAAAAAAAAAABAgMFBAb/xAArEQACAgEDAwMDBQEBAAAAAAAAAQIREgMxUQQTIUFhoQVxkRQiQlKBsRX/2gAMAwEAAhEDEQA/AL5RKiUSvoT5EmUSolEoAmUSolEoAmUSolEoAmUSolEoAmUSolEoAmUSolEoAmUSvQ5T0Ue9jXjFaA9rXAFrrVAGNe1X/wBjH/as/I75rB9TpJ03/wBPSuj12rSPLyiVbtDLnCxHYZIJaYJAibA/uvQYXog9zQ7es6QB6h4jvVz1oRSbe5ENDUm3GKtrc81KJXpz6GP+1Z+Q/NebzWFQ9zCZLXOaSONJIn3IhrQm6i7DU6fU01clRxKJXpMH0Pe5rXb1nSAPUdxE81Z/Yx/2rPyO+aj9Tpcmn6PX/qeXlErvNYND3MJBLXOaSOMGJVcrdO1aPM006ZMolRKJQImUSolEoAmUSolEoAmUSolEoAmUSolEoAmUSolEoAmUKJQgDiUSuJRKqiqO5RK4lEooKO5RK4lEooKO5RK4lEooKO5RK4lEooKO5RK4lEooKO5RK4lRKKCj6tsU/wDxsH/x4f8AlC8mPTbEj/pYfm5er2F/9bA/8eH/AJQqB6OZb7Jvm75riQlpxk81Z35w1ZRj25V48nzzP5o4uI7EIALjJAmBYC3kvoPo9tlmOwNFntADmk3taRzavBbdwmsx8VrAGta6GgTbogr32z9jYDQx7cMBwAMguBki/FerqnDtx39jx9EtRasvK38+/wBg2/ncbAbvMNjXtHXmqpv3rat58tdJj51mscve55ABcSSBoC4k2819cdC+S7UaG42KAAGh+IGgaAAmAOxLoZLyq88lfUYy8SvxwfQfR3a7MbDDRZ7AA5p1sIkcwp29nsbAbWxjXtHXmqpv3rat58u7Q2ZsbAYGYjWBr6QZBcDJAnjx5LZK8cnBTtLxwz3wjN6dSdPlHyPNZgve55ABc5xIGgkzZVSr9qMDcbFAAAa94AGgAJgDsSsruQpxVHzs01J3vZ3KJXEolVRNHcolcSiUUFHcolcSiUUFHcolcSiUUFHcolcSiUUFHcolcSiUUFHcqFzKEUFFdSKlxKJTKo7qRUuJRKAo7qRUuJRKAodwssC0OLolwZEdrePPpTpwKXxLOIiLm3K+isy+Vc9ohzYl1IJdrLQTYECS5g/oFbi7PIl1TaQJl1U8dYHEtd5dqjJJ+WaYtrwhSpFSf9QaGVF5mlzjAIFg48WzwHvWe8QSORI48O+6aknsQ4Nbk1IqXEpXOYrmxBiZ5diuhUO1IqWT60/2j5BHrT/aPkEUFG43NvAgYmIALAB7wAOQEqfXcT7TF/Uf81hesv8AaPkEesv9o+QU4RHcuTXe8kySSTqSSSe8lXDOP+0xP1H/ADWF6072j5BHrTvaPkEYhbN313E+0xf1H/NUueSZJJJuSTJPfzWR6072j5BHrT/aPkEKNA7e5ujOP+0xPzv+aPXcT7TF/Uf81hesv9o+QR6y/wBo+QRguAt8mu55JkkknUkyT3lRUsn1l/tHyCPWX+0fIJ0I1qkVLOy+O4uAJt4ck9KdBQ/lspW2QYNUX0iWjzl6uwtlkkS60umBcgODbefHSCkcDKue2WxAMGTHsye4VNVrdnuvJAieZFqpuPw9uvBZSfuaRXsWuyFJZU4dJzG2Htcj3A+5I1JobOfPRI1EEuAOtI00uDHcq2ZV7hUKTYu6wuBEnzMd88k4yXqxSi/RUU1IqTX0c/SWTMRJ+9J04UO8ktjYRbEls2MBwJEiRI7iqUk9iXCS3RFSKlxKJTFR3UipcSiUBR3UpVcoQFFdSKlXUipVQ6LKkVKMJpc4NGrjAXeHlnucGhj5JgS1wvoZtaOPJJtIai2c1IqUbt15BECo1Ai0htp1uQFxUgKGQ5waCHOglwIBIuAPiHe4rg4rvad5n/fAeSrOJYNtALj4ugH/AChc1IoC/fO9p3iSuXPkyTc3KqqRUig8llSWzug71bUqcz1fEKhUKIQpa0kgAEk2AGpPIIAIRCe+hsx/L5n9HF+Sj6GzH8vmP0cX5LPuQ5Rfbnw/wJQiE79DZj+XzH6OL8kfQ2Y/l8x+ji/JHchyg7c+H+BnA2cxzWuNUkNJvzCs+jGfe8/6LRyuzcahv8HG6rf+1ich2K76Oxfscb9LE+Sz7seTN6epwzI+jGfe8/6I+jGfe8/6LX+jsX7HG/SxPkj6Oxfscb9LE+SO7HkO3qcMyPoxn3vP+iU2jlWsaC2ZJ4nsW3i4LmmlzXNPJzS0+RWPto9Qfi/ZaRdkq7pieU63gU9Ukcrqe5NVLQuhtmM9rOi6G1zYkGqARPZYR2hR60/238+sdTqfeUvvejTaJq7dI+fmualGKKt+gz62/wBt9rjpHmD8QCj1l8RW6NIqOkAR5AeQS1SKk8UFvkZ9bfrU/wDMe0/+zvMrl2MSIJJi9+4N+DQF0zKPc1rmiqqQIIsRVrOnVN+xSzJPImmBSXC4vYkAR9Y0kRrZK4oeMnyU1IqVjso8HpCnrGSQeq2s6Tw+IS9Sap7EuLW5ZUipV1IqToVFlSlVVIRQUV1IqVVSKlVF0MYOMWODhEtMidPFNt2w8Qf4do4O4OrA62gJ+cpHL41D2viaTMTErQG2byWSehMv1peXiej2wokre1lx8LeijEzRcDY0hjGa6UkEE9pIPmqGtJBcASBEkAwJ0k8E8drQxoALnUuDiTEEta2RbWQXHtJ5qrG2lU17aOsXHrTAc4PIFhawHmeNpjlwNxjz8CjTNhc8ALqA9aX0zLpGGZmRDzMdCR1ZJhgE9vFRjV4jQKaIoF3TIaHa2niIHDpc01KXqvkiSilv8GfUipPM2ePrOJ7rJhmXYNGjxv8AFNyRk5Iy2AnQE9wJRmMu6kktIAjUjmtlU5wSx/4T7hKWQZHnV019JDhqII8LrlBTY1ufcpm/NC8Ng+nrWta05dxIDQTvRcgRPUVn/MBv8u79Uf6FxH0mtx8neXV6HJ7VC8V/zAb/AC7v1R/oTGU9M3YhhmUxHczvWgDvJZAUS6bVira+UXHqtKTqLv8Aw97g9UdwXcLPyWdLmNLmhpLQYDqotzpHwV3rfZ71gegZQlvWuz3pHPbfwsKzj0vYBl3iOHjCcYyk6iiZyjBXJ0eR9KXzm8T7tA/wtP7leR2wek0cmz5k/Jeg2jmd7ivxIIqMgHUCAB8F5zap/idwaP3/AHXe0Y4xin6JHzOpLLUlJerZzkcAuqiLRrPGfkmHZV4+qT3EFd7HHRce2PIf1WitXJpkZNGK4EagjvBCipbaqflmHVo8LfBPIamZNSKk8/Z4+q4jvulsTKPHCfw392qaaZSkmMZbExQ2WTS0x1WxMOMXHSsX27R2LpuYx4PXECLsaDYhnR6Mlwri17qnCz72NDaQBeCQ8H6wsQRoXuuL6cl2/a7oADWR9YFpgmovsJsNB59ihp3sjdNVuwOJiOdJaSRWLtpHSFLpgCOXeqW5V8E0utFiIN9IBuVbibVcaTAkVzNUS502AOluM6nsUjbD5mMPWdHe2X8+bj4J/uWyFUXu2LHDcNWvESDLXWgSZ8LripX4m0HOZQ4NgCBBcDZtAm97EnvPKyTqVK/UiSXoW1IVVSlVQqK6kVKqpFSqiqGspihr2OJgNc0k30Bk6KkFdZfAc89Ed5Og8Vq5bZzW3d0j26eXzUtpEykl4M/L5dz9BbmbDzW6PRyCZeHAF0dYWBGsDUSO/ggJt2WxL62Ik1t1GhJnhBvwWE5v0dExld+PwcuyAYYEU/xIjU0TrbmAlk87KP5yWlzW9W4qpJN+JcdfgqfU32sBJAEuZqZjj2HyURkvVkyi78Ji6Ex6oSSAQSKI16VcUxOnWGqj1V0iYAMwZB0FRNuy/iOaeSJwlwULjFbLXDmCPcm/VHdLSWuLCJjQEkybRDSuMTLub1gB/ebOsaTzkeBTyQYyXmjySFJEW5WULYsmVpZLYmLiXpobzfI8hqV7L0O2TguyzMUsFbi+p0mbOcBHKwGi9D9Gs5H8zlzdbrnGTjFbeLZ1NDoVJKUnv6Hisl6P4bLul7vvWb+X5ytdrQBAAAGgGg7lu/RrOR/M5H0azkfzOXPnqTm7bs6MNOEFUVRflD/DZ+FvwCzs76QYTLNNbuTSKfF2nlK08bYuFiNaH1kANhoe8NsOQMHvKpHopl/Yd+pifNVp9peZ39kZa3ffjTSXu2eSzu3MXEtVQ32WSPN2p9w7FmL6B/ZXLew/9TE+ah3otlgJpfb/APTE+a9sOq0Yqopr/Dm6nRdRN5Tkn/p4BYO0TOI7w9wC3WmQF53NGXv/ABO+K6ETnI1tkt/h95J+A/ZOpXZrYw2+J95TST3E9wQBNhx0hd4Lw1wJEgEEi1043OsmSwfV4N4OLlMm1sioxT3dCACE0/MtP1Y6BbYC5ty7QfNKoTbJkktmTjNa9rWlsxVqBxPA+Cz8bZw+oY7DceevxT6FSbWw8mYONguZ1h48PNVVL0ZCSzGzmuu3on3eXDwWimvUuM+TJqRUjHwXMMOEcjwPcVVUtDVeS2pCqqUooKKpWrktmT0n25N4/wB7l3JnZ+zwzpOgv9zewfNPLOU/RGU9T0iQ1oAgAADQBShCyMgBTWNmn1Ol0Gp0gRAM3A7LeMJVdYj6nF3Mk+fBJqylJpeGW+tv9s8+HOr4oObfSGzoZnjoQO7U6KhCMVwGcuS5uZcHVTJlpMgXpIIFuFhYclBzLzEuNriwsqkIxXAZS5LWZlwJM61EyBcuBEnn1jqh+Yc4Q4zprE+aqQnihZOqs85mRD3D7zviVUmM+IxHd8+YBS60RZ9I9A8y31WkuaC17xBcBqGu4/iXpfWWe2z87fmvj+Q2Ti49RwsMvpgOgttMxqewpv8Asvmv5d/nh/6lztXpdOU23NK/Q62j1WpGCSg3S3PqvrLPbZ+dvzR6yz22fnb818Vx8BzHOa5tLmktcDFiNQuISX09P+XwJ/UmvDj8n33CzDKW9Jug+s3kuvWW+238zV8iyjRQ2w6rfgFbSOQU/oF/b4I/9R/1+T621wIkGQl9o4lODiO9ljz5AlVbDbGXwR9xn+ULj0hfGWxe1rh+a37rwpfvr3OnKT7Tl7WfNWheZxHSSeZJXpHmATyBK8yvoInzCPRZMQxv4W+8SrlxhiGgcgB7l2pJZbl3hrmk6AtJtNpTe+wnEFwJPRq614bB4847bHmk8ACpsxEtmYiJvPgqgpcU2XGTih5uLh8QILWggNcDYsJm8atd2qXY7C2mGiLtkPP1nkgGQbgt/fRIoSwQdx8IEJrByRcAZEEtvwANU+PR07eCk5B0EyJsQOJEOd5wJVZR5BQlV0KITGJlC0EuLbCRF56vkOmEuhNPYlxa8M5ewOEEAg6grIzuzCOkySOLeI7ufx71soVxk0OMnHY8lUheqpb7LfyhSr7i4NO6uCVfk8ZrHS4SCIIgGRInXsBS8q7KvaHEu0pcNJueXbqsZbGcd0Msx8Liw6MEUt1Gt5nx7bqcTNMI6kuiJLG8G0i02EgW7FA3IPA347yOqPGJJ7bKvB3caS4yINcky2IIsLVAe8rOlvTNfO1opxnAkRwa0cbQ0AjzB81XKefuoibtsOvfpOkkgcbHuNkVYNiTeGzAfEhsaRrUB2RPFUpezIcLe6EUJrMlhb0KZkk9YGTTwIvo7sA7SlJVJ2iZKnRKFEolMklCiUSgDF2oP4h7Q0+6P2Sae2sOkDzaPiUitFsaLY9t/wANndLHbzGEfIuH/sveL51/w7xIzL2+1hk+Ie35lfRVxetVaz/w73Q+dFf6fJvS5lOcxh95p/M1rv3WOvsG0Nh5fHJdiYTC4xLxLXWECXNIJsBqvPZz0CYb4WK9nY9rXjuBEEe9evR63TUVGXikePW6LUcm407MLKdRn4W/AKx5sV6jZ3oWQ1u8xRYAQxvZzd8lu5b0by7P+2HHniEu9xt7kT63TW3kwh9P1pb0vuaeXw6WtbyDR5CFlelzoyr+0sH+JpPulbS876bPjAaPae0eQc79lztHzqr7nX6j9uhL7HgM0YY/8LvgvOtbJjnZb20HRhu8B5kBYmXEvb+JvxXfWx85E9GUKJRKgglCiUSgCUKJRKAHW4WJS1zXOM6BrjIFwOwcRHbHFchmJTNToMR09RDiIvcWcqxmXtAEwIBbZptJj3+8Idm3nUg6atZwqjhr0nXUVL2Nbj7l/q+I4wZNUAlxmJdTee1g05BLvy7miSI14t7B+4XbM+8A3k2IMNt0q5Ajmf8AdlW/MOcIMHl0RI00P90f7JTSlfoKWDXrZWhRKJVGZKFEoQBxKswADVI0a48bECx84Hil6kSm0WiyUSq6kVJ0KiyVI+fuuUZbHDHVEAiDaBqRbVNHPMg9C5ng32KLcr3UNtbIqMU15YqPhr8FEq7MZlrqobTVTAAHAnl2EeSVqVK2KUUtiyUSq6kVJ0KiyUSq6kVIoKEdratP4v2+azlpbT6rT2n3j+izVS2KRo7D2q7LYoxGtDrOaWkkSDHEaGwXtsl6dYDrYjMTDPExW0eLel/hXzmUBYavTQ1HbXk9Oj1WppeFtwfZcltPBxv+ni4bzyDhV4tNx5JxfDVqZLb+ZwupjPj2XEPHcA+Y8F45/T3/ABf5PbD6kv5L8H23C6o7gq8fNMYJe9jRzc4D4r5yfSHMYjGziEAtbZgDeHMdL3pF7iTJJJOpJJJ7yVnHoZfyf4FqfU4rxBX9z3ma9KsBtmlzz91sDzdA8pXmdt7cOYDW0Boa6oXJJMEchzKyEL16fSwg79Tw63WauqqbpcIT2qf4Z7S0fv8AssvIjpt7/gCU9td4pDZE1SRInQ/NJ7PHTHYD8I/detbHnWxsyiVXUipKhUWjuN7Cx15d9x5oII1B8Qe5d4ObpbTF6qgbWu3TiLNcP7y4zOMHEEW60jvc53wcPep82Viq3IlEqupFSqiaLn4k026oj3kz71zKrqRUlQFkolV1IqToKLJRKrqRUigoslQuKkIoKKa0VpbeI3irEvEZrRWlt4jeIxDEfyuYDHVH2XRrqWkCOV4unBmMAOs21Q1DzaWcCdIr14hZGXeCTMRS8nTgxxHjVCr3ilwtlxbitjWy+NhhsOkEmD1jaWzpFrGB23Nry/HwwWljQCDJkPP1hoDbqzrPcDBWRvEbxHb8jydVSNtmYwiDUOrWb8anNiIiTFQA4Qls29lqIiTwfOg1k6TMLN3iN4moU9xOTaqkM1orS28RvFWJGJ1m2lzYGoM/FZ7mEaghPbxG8RQUZ6E45jTwHhZVOwBwPmigplCF27DI/ouUwN/AxA3DbUQOi3UgcAq8TaTBpLu4fNYilrCeCnEnEfxNquPVa0d9ylMTNOdq5x7JgeQshuBzPkrG4bRwnvRiUkLNE6DyTeTwy0yRFo+C7D4U7xOgoZrRWlt4jeIxDE1cpmWBtLwSKqrTyA4EcK45EgqcbMYVJDW36Okg2LpgmY1bwvHcs0vFANprPKYpHumPM+Ne8UdtN2XbSqkbr81guNTgSZHB0UgRAg6Wb7/EZmcIiiIaSJBkAdESRJ1kOPbZYW8RvEu0uWPN8I2G5nDpgtEyXxDomikNN5ibzPku35jCIcASHPkFxBMAuB8bBYm8RvE+37iyfCNw5zCIEtMgW11pYJ75b3W7Vy7NYJJNEk3vMTJ+TT4kLF3iN4jtL3Hm+F+DbOZwS4EiwJnouuJcQG3tqEpmMRsNDeBcTFWha2NSb2dKz94jeJqFMTk2qoZrQlt4hPEjER3qN6kN6jerfE3xH96jepDeo3qMQxH96jepDeo3qMQxH96jepDeo3qMQxH96jepDeo3qMAxH96jepDeo3qMQxH96jepDeo3qMQxH96jepDeo3qMQxH96g4qQ3qN6liGI+MQI3qQ3qN6jEMR/eo3qQ3qN6niGI/vUb1Ib1G9RiGI/vUb1Ib1G9RiGI/vUb1Ib1G9RiGI/vUb1Ib1G9RiGI/vUb1Ib1G9RgGI/vUb1Ib1G9RiGI/vUb1Ib1G9RiGI/vUJDeqEYixP/9k=",
  "data:image/jpeg;base64,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",
  "data:image/jpeg;base64,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",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsmAgp21Zn-NRH5o2VoABScTK75_jpUh9cCA&usqp=CAU",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRp8Nx8vkWZq_s3DpZQ4uyFMuOge7c86oiXUb_St2mXfu7jr5OjN0j8oacccBm6zeAN5T0&usqp=CAU",
  "data:image/png;base64,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",
  "https://res.cloudinary.com/practicaldev/image/fetch/s--LiAkm3eo--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://thepracticaldev.s3.amazonaws.com/i/658zy0pc4w7l3x25s79t.jpg",
  "http://computerjee.com/wp-content/uploads/2020/05/C.jpg",
];

const Gallery = () => {
  SwiperCore.use([Autoplay]);
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: false,
        }}
        pagination={true}
        className="mySwiper"
        autoplay
      >
        {slide_img.map((img, i) => {
          return (
            <SwiperSlide key={i}>
              <img src={img} alt="" />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default Gallery;