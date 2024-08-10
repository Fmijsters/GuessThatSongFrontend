import CryptoJS from "crypto-js"
import Navbar from "./navigation.header";

function AuthorizeSpotifyPage() {


    const clientId = 'ba70b057fcb54535a6c808c38973989c';
    // const redirectUri = 'http://localhost:3000/spotify/authorize';
    const redirectUri = `${process.env.REACT_APP_FRONTEND_URL}/spotify/authorize`;
    const urlParams = new URLSearchParams(window.location.search);
    let code = urlParams.get('code');
    console.log(code)
    // let list = []
    // for (let i = 0; i < 200; i++) {
    //     const codeVerifier = generateRandomString(64)
    //     generateCodeChallenge(codeVerifier).then(codeChallenge => {
    //         list.push([{"cv": codeVerifier, cc: codeChallenge}])
    //         console.log(JSON.stringify(list))
    //     })
    // }
    // return <>Hi</>
    if (code !== "" && code !== undefined && code !== null) {
        let codeVerifier = localStorage.getItem('code_verifier');
        let body = new URLSearchParams({
            grant_type: 'authorization_code',
            code: code,
            redirect_uri: redirectUri,
            client_id: clientId,
            code_verifier: codeVerifier
        });
        console.log("Requessted token with verifier")
        console.log(codeVerifier)
        const response = fetch('https://accounts.spotify.com/api/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            body: body
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('HTTP status ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                localStorage.setItem('access_token', data.access_token);
                window.location.href = '/'
            })
            .catch(error => {
                console.error('Error:', error);
            });
    } else {
        // const codeVerifier = generateRandomString(64);
        // const codeVerifier = generateRandomString(64)
        // generateCodeChallenge(codeVerifier).then(codeChallenge => {
        const preGens = [
            [{
                "cv": "lugU9XIeh3TMhZObtwd1tD0jsChzMdFC7zQRPoSLSeUfpadiIIykIUpDSDeIvkag",
                "cc": "GC26s51LjXDUqynMyXqe-fwCNxOVkeKZ0c1bbzms5bs"
            }], [{
                "cv": "ZsriKehbCvcrv0ZSm51FfgANVzKeXh7Xixg4Dbty5jG1LNbZAySDm8hQV5CsoVIV",
                "cc": "zUnBGRkXgA5hb8LCVlYqHhFNPPZYdgW84iqzNXkQ2bI"
            }], [{
                "cv": "Gajc19vpKLbZ6UDyBO35a2Tm53b4g5WpPPYVSB1lTKKCbN4QOdawbNrIZcDn4yIt",
                "cc": "1sb1QPCiXUeRNQVKSvz0Mrm8pkGVl8SXhlgZnnGqpYo"
            }], [{
                "cv": "NauZld5ztLI3VMHmXk4TLnColP6VjOef3DS5mFb6XL15ISfPYLq2mV6hiiEgxCyK",
                "cc": "byTsHgTpmI9-sZOGpa6g6mpTJ7NkAp91GMU1MgBe0rU"
            }], [{
                "cv": "b1ISzcsZjoHeuRsVH4inKW188UYoDPArQaCC3Gqkf4pwrNxE5Cb3HPgAaxTdNAQZ",
                "cc": "mtUkUHjh7IilpeVAjYUHlYnHYl6Xs_pgvB8a8-v2hTQ"
            }], [{
                "cv": "M7sBM3eoU1D7q25pgEgZfGhYUlprArELdldOIPokuwpw4UenHWoJM3L2cwDHO0hE",
                "cc": "qUQ7oPNy7UzNQHkYb-ael52iDG0Vb-qJda0x5D900es"
            }], [{
                "cv": "kao1lwmrXNrnc29OTMePxv5ZpJ0vXna3hlXS3IGRX92A9GpUQ6zWX91Pn50d1jVB",
                "cc": "FY_w5YMnwMFkEFQno5C4zMWA9DQ28oQwm6J5wv6yOO8"
            }], [{
                "cv": "in30cBCCR5KfhI4CtEEMMaoKnBhOLBqZzvTH1WzSPyuMGKvo0BJoJXTrKFHaJCp6",
                "cc": "xr6yPKc6HqBuHTS903wgYNDyWBs8uogZ2CX3e1YBf8w"
            }], [{
                "cv": "GidJ6iMFk6A9p393xn5ZJfIdKJOJfCv2bCwjpPTvS8XgRH0EOdcEvL7Lhw815JRL",
                "cc": "wA4hYmnQT2rXAd4o7jJS3iMlmo9VC0b-Mf2SRozTJkw"
            }], [{
                "cv": "gTOwpyM9S8fx0YPYOl7CRVH3wvxrOaRFp0k12W6aoiYThKK4OLMi1TfAugFAWkGa",
                "cc": "nL1188zc-PEZ1woCbcDane4TdP4Xu_TgnqMlZgC474I"
            }], [{
                "cv": "X8JFWcyPRWDqs21NfrXqK8bh67FQhjaGwwYyyo5mbb3AW98oMP76GtO7Xr22Gcvs",
                "cc": "dJrh9iQhjrCg7znAB77bLH_xy1MAK9JtLYQCBWzeJ7o"
            }], [{
                "cv": "b2IhIh65iVJiLIhwxn8nuF7JS07DEWPAiZ8AtaLbbE5HBDma4b8NOYqEnO4MXgXf",
                "cc": "tt-ugS2ctvCZKiV-8V-lEAn16EVJcD_fzifMxv1HKD0"
            }], [{
                "cv": "jwn9r5d224AVPPzOz4QxOPfN6GQvWgbfjGGZ0l35eRd4KbKvQ5l6wIZZpTB4rxV4",
                "cc": "Fnjcs2h8_7JAaPkX3UvivywnSmRy1r60TnKnZED0Tzg"
            }], [{
                "cv": "xz2lHTO9D8IGuo3xtSIjOSF6is62SDew90vIuqkiOMGA69n7JQitEdN90cEJAEE4",
                "cc": "RfFIsMsSDpTIo_TlVo2sYq2ZFDM5F14fF7XhOWNdvQk"
            }], [{
                "cv": "p2HSpjtL4MhhlPZaw4voARmEaQ19pw5QoLTualC9dr3h4cShobNL0qJaQJXwVSsh",
                "cc": "yF82L-wrPjWni8eRQFyh8eOKrNUUx2OuTeJYJk0txDI"
            }], [{
                "cv": "8VzkOSVHUSb3h0vfR6f4HkUO4gN85jPNOPOSozs4GfJDDmNDya0UeaGJmxInMQBY",
                "cc": "Im6z4fmwHpIhFQxiG4876jva8_IkYXIu23n_TOg_XCA"
            }], [{
                "cv": "Qc7P993xzY7wx1NHhWqGJKPUvnBxXR4OHH5FKS1gEydfctVlZTgETxY3J0kSEGJy",
                "cc": "rx7CPfNN6OPGX50bXkyeKXB7E4rIGzc0Rnq7zhiiD08"
            }], [{
                "cv": "Lf0OxiE5NlRQWWL3vkKYhJvfGce7mLgSIYsyG7Q8LJWO9YfaFZQFCww45sZA2wdF",
                "cc": "XneYPOkbGivnb54O3D9oE2s85xiNHu-Kwl8JJO3FJaU"
            }], [{
                "cv": "SzAhZLzkxQB1HiqetKtVILkvceFJ94sAEke4OukMX6lGwMepz3auFsjcdXf7CC99",
                "cc": "h7a4GD9pSRst4NQBxiCxCk6UgnWzhEZnEMUo-EQrJn4"
            }], [{
                "cv": "L6RTd3ge3S17WB5qZFjlRd2qwFcLtJVwMDV0CF82GKjvcROz4J20QpwaJAabL1iQ",
                "cc": "S3Z7Po-g04ILdpT5vubhGc_XO3bbgQtMBXYcKs3KOrw"
            }], [{
                "cv": "9VfV5U1YePG9pLvNWAtoljJ9HYxANU91hPJDARb7FyZ04NG31xSwrvwIpRpNiWOR",
                "cc": "H_GW1zK9P89-z3YtxeIOZuOqI0vaP05m4zHC3kFjsNI"
            }], [{
                "cv": "kulcwgGDDC7rXwMg7WYVahcffit5D9TCK9BBaWeO80H3OIV1kuybXxf1Ch35a5pc",
                "cc": "057BVQHFQicHJNnkVfNOjMWg5mtocKvb2YA402PGk7k"
            }], [{
                "cv": "es4jSXOUCOBlmcye3PC9TKJtUUDwaEyFv2WIXX5RV7OtU6ZSTl20Et5ux69YKzij",
                "cc": "CpA-m6MI-q8fgrFFeQ9Dr2FFevVLRwobolBJ7zbShxc"
            }], [{
                "cv": "yvnMWUMJAOvcAWijk0A35PPnjm8tacR2lLR6JfPGnHJqnyUtXjFuRNS3pil5zdWA",
                "cc": "4mv7fk9fWOR-riGm8djiX-gk1Ua7574D8ZQp7WLbSaI"
            }], [{
                "cv": "uE6WSidXohI9Bt66nJl301GIEZ2tM0YMu3Xc7liwwF1rLhNMKxoIVujAAJMsjTRF",
                "cc": "6xQ-qgqlE1lXLjN-GJAfEXSvBicslHXRyHyioZqyqbs"
            }], [{
                "cv": "tax8EB46bjuCwTZDjMwEywNagLdHfSqqjZzB6VvkXmDNiPa6vAz4JQMRGopuKq5P",
                "cc": "Lk1eBBuf0NmIkw8PjhGNZHARMcUtIXHEDoZ7kP5yjmU"
            }], [{
                "cv": "xrh3punJVFb8gYkdmNSiTFvgHUl7MIz6MZyuI5hl2tXPD3tUh23JKgcJ1pPFG2Lq",
                "cc": "4wEdT3vEBBGEQpu6aIWkCnR4PR5pdWTUye2HfaH_fNk"
            }], [{
                "cv": "HrAmjMYYRU3nkAAN4T9oOpClj0oeHTGLNiXPybvS9TOWRwvADvEeAqCchiZRjMHN",
                "cc": "7KOdJvQui1NN2wwybvStlY91RhiuyqftfXJf8n6YIxg"
            }], [{
                "cv": "h2ErhY7omv3vmuzHp5P2aXPqdZcz84JXWdsEErbGqQtY5pO2OaVnpdHaYl0YHPN8",
                "cc": "OSs5Mn7d4THwmryV9LFHg_EPE6HueNtiHmujZIft_ss"
            }], [{
                "cv": "GbY7lx98jaw237lUbwIhHhnjox1C70wYqEXIa4aRF1QGkmtqVZQBQXGCBPLZCIVV",
                "cc": "k1D-xYfzjykTgZqDR1OELRLtj9Juz8P3iP-p-YxhMQk"
            }], [{
                "cv": "e86n5T4M1H1bgvduBXN4i4aj3RMTl7X0xP6l4lIpLR0e68WNGXIKdK6IJy8OeveI",
                "cc": "ypFq_pHnLwgIGIatOI1y6UcT4RtdvYzJxJSi2JvU7aU"
            }], [{
                "cv": "WcW3coj4bSMJQ5RIbhhwfR6rPi3qzzZPu0ULkR9JdZmYFX1XPrFzvrfn3AbyAPbF",
                "cc": "_EYKJTwClkj6i5oCoxjoEqT7nVnnLVQoPwOeFRWSJV0"
            }], [{
                "cv": "xw03Y2ic5YyiELzwEMwguEEkX7sfMrD3XCc7iPqmasHNfoe6vCZAbUfMOv43hpZH",
                "cc": "JDDBYAwd-dJhEerbAlB_C3ylhz8x8d59LQBFEutMrrw"
            }], [{
                "cv": "AhOcgqKD6AtwzDiHdWLu615t3VqkbaLNwb4QVX4fe5OvCWwlE72fOT3qPiVGEvY6",
                "cc": "OEAZ5KCo8m3KhfieOREkjBffFWlqsyAB1EKo9kchz70"
            }], [{
                "cv": "FfGKcUSB0mJPC7OCjBvbGqQ4nIHlhSitVB2jUE5J58clEtiCMPdCk7asCSJTVLFI",
                "cc": "QMYhVJ3nR8whg7Ertkfl7CoyuGVYduBzCyfzIklxk1I"
            }], [{
                "cv": "n5YHuuE6zygvMYdXEkrrFShDxcrQqIfE6l4qzdkhFKwl5ucl3tKI7tNowZ1DEwoC",
                "cc": "HDHlHtpriqv_Q_egbJM5-AoXyw3KMQDtNxhp-tlG_vA"
            }], [{
                "cv": "l9sxLwGCYxknxSwGdv1gCMybEneCMupSleWmw9ASev7lUgDhv5D1r00ZUDAXafdA",
                "cc": "_bPF28SAX8Nj8S_mB-YUj5k4Ci3TXl16C05AEv7IJ6k"
            }], [{
                "cv": "Bzvut1U8xC05PTV2U1hjgvn9nWKGw6jFwQsXt6gapgqJBAPPD18HlrJwFqFG66xc",
                "cc": "tmF3qFK1l8rFLbqUUIgpEk5w-6zjmdcZKw_gaRnmHYY"
            }], [{
                "cv": "hZagT7ZKBfkWYuP84mcU3pJwTVboUWoAGZNli9yQ5fLM4yFGqFkVZhFfsJZdnd7g",
                "cc": "GR-kSOK5tvWKA8LzKKqPBNZV7jfO-hWjawAB7XRXJMA"
            }], [{
                "cv": "5fLEi0DivwLsIn7sRG0Cdm2JRMW6VWomNL5spCjVkaclI3KsJ81SFlKagN9T5RDa",
                "cc": "B-7OD1_bP8xH7r8A62KVICxuD0bPy41Td0Xe7BgU94E"
            }], [{
                "cv": "fyZ0URuCyZ30HFhfB7ozyCS3tok7VsFrbTkN69nzss5wsXWbDmbJpCKvM3tf3EJc",
                "cc": "WRS0i7FwMRBiJFwH5Wf3ZOuCjDP9ZhIIQcLHivlxqFw"
            }], [{
                "cv": "mQ29hXX3ef7ghxGMle8KPwtHAI3kkb81haPi11hKZLgnt94hmAqGknDwac4uU6Sy",
                "cc": "57enBsPiKZ2aebBYbVCumcwcYK0VxwqJwuB8CTbiCT4"
            }], [{
                "cv": "ebqB6FIwbCw3U6psZbXpZfPR5tHo8TRY0B19QPEPcixJc63HgFjkfwYPJb1WGRV1",
                "cc": "GRDPl7vF062gqAnscATEK8ib4PEfYOaK37ZuXFTWHUs"
            }], [{
                "cv": "ziR8fAnwhacNgcjMfU0D3rX2G9PivZyb56eQkO7KBebf2KbRMH8f9WfNjzCxH0Q6",
                "cc": "vpiVzWn9u7ZQ8g4LvD3cvL5fBSXKPA5LAQO0X8RSi6c"
            }], [{
                "cv": "fPpjHm0dkpz5GiNbdSQ9bTTUBkfiZdgnvg5kHhoxo5d2nMyalft8mkt7OmmlJeyZ",
                "cc": "8lh3-ge0Xzl83f5tlFVA9jSp07xH6Zy_Gctm-gkJ53o"
            }], [{
                "cv": "JhabzhoL5s18Jmd6TswA5Xz6OtmHRf1sNPdWr57mLpwIWHLAIU8RxKg2lKR6j0VE",
                "cc": "HQqXG6jP_GpB4nliSYjuu7cMA96IJWs0uE70axP82Ls"
            }], [{
                "cv": "S7YUxQge87X6c2Mgh5O9C0vO5dkcMqgwBzKcxhWwcSnaSu9vHGyQ1SQxWCkXgDcn",
                "cc": "6ToTpUy-4u5KzYl95e8rbtIeCbNvPcvzd-Sd24sPCHY"
            }], [{
                "cv": "v38ZOzgHAk0Vzl6LfsZDn8nrxUjd3Wag9MYiHZh3sm4FjMHSgM5RukbrIr6heU6B",
                "cc": "RbrZLFqZgVVTAfq50O0ZL60B3J14UddyEL-5WGqV1ZM"
            }], [{
                "cv": "zExplqWdjnHZH0Z9m0nqEpGtVJobNJ3OKszaOoPjSoMf4B3KzBurodeC6wDSTeRG",
                "cc": "86TY2n2frp7GWCEEVkUNiYBXKhhGgdIEzAuf7hosuZM"
            }], [{
                "cv": "nHHQRWPaciqtF3MALhafzhZczKn9295VFfwVI8xjBgBVmdU45zJsr0XVXwSj5uAq",
                "cc": "gLO8WkuTER3H7dWLAMxNhsh8j7DjommtKhzBQrXhRlc"
            }], [{
                "cv": "pfAy22k6KGEVHYOmyud6eXAELK5cJkpKSZDljrkkypamRCSPsRUtU5h8wUv1WuIf",
                "cc": "RBBxdbVGNcfNJDo6zZ8l29iEwsEIKfKEj0IHIFvULvU"
            }], [{
                "cv": "uS3gaXBj5LGKlfHiljkia40W7fC3XnCuThjNOMGPeMbeD3nCtdmIz7KYgXgjH196",
                "cc": "ufKap9-jzL7p7RM4bPOzpvkIQu1MbLRgctrkiWcbI50"
            }], [{
                "cv": "1uLxjeVZhDUjdxrzN2jHuQKwCCQLAY6pSVzHAubCNe58k4OJkKrNx6PYLifMsuLw",
                "cc": "fdcQuJ0xTcq7KeR3oNHsn3EKkudpfXAW4HxJvIIbHXU"
            }], [{
                "cv": "dIltGnpoomDd4TJZok5RAYrtIw7rBu4XYeVvZTUHVb0wW36Xjp9sy9GcENkq5ORR",
                "cc": "I7FoWTgrMI9nupDrg01eU7xw7FcqQy9TBV8JX6Wn99k"
            }], [{
                "cv": "jC4VGcSpVaRndOlJUqBKTq1AGBIpZEUo9edLhadL3ciseSWukpdee8LzAyRueJLF",
                "cc": "WqE8sMN6U98_k_7XZhxbC5dopFg7BzOWWVFv4dsGhGU"
            }], [{
                "cv": "j5r9qzVmFkGRvEKm6LuTHI2Rse5BUm4YMpDxXJOyigEhFH89Wo03fwXFXAiwQH1V",
                "cc": "-yEXGnFARIl7WqZf-WXIDIogNiaPYg46mv1yhkuIwGk"
            }], [{
                "cv": "zngZKPX3u6VHT3rZZDwS9eAzSMgbpmlw922rlWlBm5t1BvHjFAOHE3CYkOkley12",
                "cc": "C13zEpvlhaheFD4bracrjOBsTEOJG3FUZP44V0jsvhE"
            }], [{
                "cv": "aae2mmpLLV9AkEPMawXAdaBWATd2dKPGEKvUF23EBRx4lV2W1jbMq7bqeqVZpzjf",
                "cc": "bzV4lMwOsVnwD4_7gkVG8vwdJs0dNEAdB3qwaIg4vJw"
            }], [{
                "cv": "4mLAMaTA9Ix8uEtnmEdPMplHdkUmBzrm2hvXM0QRwGtWNtUXhmW4gGAE3hmgl9kv",
                "cc": "UajqVAqwrmuZh6ET7FsQX7uJf5LRHuwHqRnxaRa4pvw"
            }], [{
                "cv": "sxpF8qRM9E8YTPeHJSmP7Eudd5ZcVH9AYchISG2LwMhBcYb61fTilej7o7nuSGca",
                "cc": "J2msq2xRmMjQ_6UbxfNuq3niDVv8NVVBc2PK6RjJPxE"
            }], [{
                "cv": "2yc2f8QV7Yu7sxpZlclCaK795glx6MMANIy81JGfxMjusQhUwrizYBHlEFGwlzNl",
                "cc": "x_s5c9r8NwD8gbOh69i5Z6sBAWYCPoIWvl-ShsDijAg"
            }], [{
                "cv": "UYt2F6XGKAPWE3hS9GWQxoXRq0RHuMh4f8a7KdaI02uU62yRALdF5zeVtfEohsva",
                "cc": "UBOOCFYdyzNDLCtzPprgcKqPsamsILue1XvoTZHKGHg"
            }], [{
                "cv": "tk0lNv3XReI3nVSzYGgeWRomHmkF2pkluco30VleYgPX3oE7NEgqzJgJMyKgV30n",
                "cc": "QHrslv1X3B0thox_-t_-cNL_HlvnIZY-AYlpqbu4vDA"
            }], [{
                "cv": "prDaeqX18z82vnEwbmvibyOOeE0wtNyUv8M8YbNWAmqpYdLLrMjPY3j8ddQCUwcB",
                "cc": "EYtkGYGASNxTZFDUr-G3BE8xh2yYOWK2p-fMoowLYIE"
            }], [{
                "cv": "U7jeM9V56jByxc81EWiFN4gMmS3l24JwWBFSh2bx8H5di7E8rhYO2UXojdp3SO5G",
                "cc": "CR_XyJhipnnCmDtS2Csc3O4K1pNjl5-J84QC70t-bmI"
            }], [{
                "cv": "0CMhu7KKq3FfshpWZFxVdxLD1yaSJYxqTJLSnrhNnntNXpN86Qfouo92Skm2v3JL",
                "cc": "d9grKy1i1JeYl9cbxPOr4VlKhtRzK8bTqbmDoDe8le8"
            }], [{
                "cv": "iyZc1aw2iXZxN6o6ioT3zzirt7JWwbGuVyQDiaoTBFJi9k8hesR7GkoxuvjGQl8W",
                "cc": "SCLXCe_vDGEnW_nTRWphYpKnUO0denoLYwFWerSs8lw"
            }], [{
                "cv": "wjAYHRWbiKeRKAEQ3LBGycfUj2mMpKK1nxnS4EKHmfjnuRa7bvp7UQU82bjY5j7k",
                "cc": "6rmxA6GWkAPfKJ2qQYcS5UBDBORg5pt8OnShh9n-P6Q"
            }], [{
                "cv": "S6s2diLL8jplDzY9zBWWqmnFAMp8WAnd1cMUHp3ZVDE0xMlkUiynHx7QIJ7r5En2",
                "cc": "F_5lO9rA97N5APyHgvE5jjxwOemVoIJyfEej3S4mjX4"
            }], [{
                "cv": "mmRUYS2litNiIrNcIk4HbU6e1plEJB5dvlEglJozeqHk3jNwTC5ujKCrtJoHSTiL",
                "cc": "ZZgt_SJbUv50P-UKXLrNdN3_V9ILx0R_ZkdgNbJEp5I"
            }], [{
                "cv": "hmIWObbWml2jPVNeLv3kg8jadH4M4lVQCorzeunq79TQzxFsmBds5ruZxWYD3RFA",
                "cc": "gPW5Qzup9N5l1ONJaBKhf8gMOnF6Tbkt7PEbBZuswCI"
            }], [{
                "cv": "znbKinVEc40MLqUt1wrRs44cFbZhEPRUadp9bHTCDndmdXxGGZTr95wOstRRmQSp",
                "cc": "wFpbDd3ZEswo7E7Y84nmBAeLFTzB8T6YeyTQyOrFrtY"
            }], [{
                "cv": "c78zW5o2ghVRWO4vZjrkPNqjOZPytkT7CNPa3irwmGtI7nvvhh1T7Fdqfl25zp8x",
                "cc": "e1NY_rCfXBQnLa7wJKMlRkErwPKTcXO2kF2kXSB5II4"
            }], [{
                "cv": "dWq9kD9Pxjwl0lOwHO2pgQvMRZahkgTRSzIO4sbKmSwC0gNtjzqbpS2VcHhkREpv",
                "cc": "K8S6FPf_TiJbgMbb6X7wpzH2eZVHjm_XmxAKVxjMHPM"
            }], [{
                "cv": "DsDMidaqkMQKLdw2PO1lkRfagiu0vmJE0hKnrsCkS4SnwQ35LZrX8XssfZFtWcnV",
                "cc": "mIF7toptSEQRLJYdWYzu_isprjTm_hoLWwq1J0eokb4"
            }], [{
                "cv": "FxVrgloEMBzZdCSpSTtzMHnVt694ScsyILLt40ca1KddBWfydQFKlRmWK5DBnKOj",
                "cc": "a3MFVqJcqQGrONPSRbkr03WpMbhcZ4kljqp11SZN_mo"
            }], [{
                "cv": "cvHAoDQUHic2LbTbAhajaHJMMtWYJOrX1SZgFNcNucKfOlj81ygnPKZgoq5eWPPB",
                "cc": "D-LlZuL_a0l55wQ0gZb4fZwLaBCM9V7KoUf66CMjZkY"
            }], [{
                "cv": "Af0K8dqB1zobezyMdFpzv8HJthuurk5qGV7DwQSjh83vu2Zx5fCEyrfy09ET55b7",
                "cc": "oKJcKq6VswnfBaeMz-4dUssKIxQ7AW2sqaTxoTuK34M"
            }], [{
                "cv": "tCIj3kzoIBQGJdV1mVOE2pGidnS91B7JUtu6CGixFLc0R4gYmPzWNTihZjTSdNsE",
                "cc": "81XJP6OEMes9x8F96cFE8H_TrQvcOXB--gA4aeBMuMM"
            }], [{
                "cv": "RLmrbt2Agiz1tuKlvrH7xr0VnTI8KOQvLTJ2sLQGOClgQY4j9W2YPn74yIME6b22",
                "cc": "kmtZ57pBsl_vPHE1aaFEAF6b0ZZQ5_uqrQeLFBETPe4"
            }], [{
                "cv": "aqk3Jc9dPo7aMIgWdgRBcrRsGfysvMip23LTutuO0gDe2kVkq0w3ZIMuZ74Jyq6k",
                "cc": "igYMR6WgKMpijF0T-eRfCinqYNdUKkHZFtoFoTImQPM"
            }], [{
                "cv": "9uxQvZJiuIEoxQASNgzOYf6ToN05i636llcWz16J0fvJzyJeyyuDsbCK0ntYv3cw",
                "cc": "XODzmqBirdbFGX1HuVfZoY-a9zm_p3aUzrSIBDbbcKY"
            }], [{
                "cv": "BkQv3diBNSRhrZlpFHN0CeU3MHkuSS6UGj0dkt2orO103y9yvguu0wLgwLDGvNcJ",
                "cc": "vUnUbDSkXQLdqnvN00kTq3Sz5Cj_9OoyK7B9Ytm9Yuw"
            }], [{
                "cv": "E06FVYwNvomGXiyiZcXAvFWxKRk9DOLy7jnpRxUVcpK9UyxsC6Wj7O6ZHrloqpDs",
                "cc": "qXjJxdvg4PC-BOqKUarzyYoOSMUBek_zgRHrmNCK4hk"
            }], [{
                "cv": "UcRoaUPd9gMqYI5kjfNmjMl3ZRzeZ3MPQ8WlAF1gxDp0iJEeIaPMXxysOk9G0Blh",
                "cc": "8k7NYcIbRudYXTpJPbqKgmg0r-6qzw289jaOMFwjJzI"
            }], [{
                "cv": "S8I7zlCd070j4Fkfa20VOnGDCsQxORc9ekLIov4H85fIznNPuJ4ySqWFv4CZ1WT5",
                "cc": "JCFTOb4YyfgoQKMrAR_4bEEOj5Hl8xkxQFDI7D1QF6M"
            }], [{
                "cv": "PImCMBdq6y8ALTfFVhCBrKDlwGHF0rZf3l8G3QQ8wujYTrF0I89h6LQ6rVBwU43N",
                "cc": "sjSIh2e0kzTVoL2FQcJB_zqkyISv7YUIeXe59zhQbvc"
            }], [{
                "cv": "zk9dZP3a49gTNnxn8Paksp29PW1zX0FmtK2OgEdWRr087YfCnwC1ynYudZ65G5oV",
                "cc": "zUAoG5x2FawxUsrU11dLinliz22uHFa6Wf4x0P5YTQc"
            }], [{
                "cv": "d4v8yVF3lzX9gEJYUeXHyihOWmzWOyenRCKyo2zysW8QQKIOVLOQ3HN4IWal4Jv9",
                "cc": "JuIq3DeaiQQ7nYdEVGl6qQ3JmLmKhvWMmtZdZ-UJ3ww"
            }], [{
                "cv": "raW17eLwjNT3BTitfuIgRmoQ0BD00gzsdaa35cK4NtfM7qTcaRRbxGOKdw4o4Mog",
                "cc": "mSKPODkCtZCyofEH9__131e0AAYqASMuFTDQVBImH8U"
            }], [{
                "cv": "VfI4zulev4VjaUzg7c7blkz7WzNqS4Xj0aT8ToHDgLvAwlJuJj0JsKOztv8dALYo",
                "cc": "nEgU1wVE844Ngdsh_1gul1ynivmyFKMjCED3RiFIHpI"
            }], [{
                "cv": "Ek0HGuUJ17nI6hgySvbH5rR1BBairI1wRaDUCdWHgbIS2eClgLzjf6kA6LS4Ze9J",
                "cc": "4DuuM72kIbY-XAjbrIca9ANQy17hbti4EvCaVAB4v_c"
            }], [{
                "cv": "v5pLbDiMAeoJiuW6YxUsPs0wwdgda2ghkcnJIf5zYGtbyVl0syzksWteGPJcdT5F",
                "cc": "CODDrx8VcDeYTjtQRGfjMQTqU7jhUFX8-8JBrzjJQBo"
            }], [{
                "cv": "ifHA5IiP7aFmMBqhap0vl5l9crB7DDAL9CUtRr6K2lOg99Q3PswGMHrsl4webCld",
                "cc": "cuZVnWDJbAUakA9BtQTcaa-pdC68y37t927A84ych3I"
            }], [{
                "cv": "060I2Twrqq0RMHXKoFGnCRVstvYkzZ0d7d0i7PMVL913z7zNNZOJbcndLHxltEXG",
                "cc": "HwnQpnkoNwZwi33daYTBTt6wME7C8oPsK4N4Kqp3xkA"
            }], [{
                "cv": "L80hRecy7HoleX5HoNY0PBF3uITY5QFebCh8rWvQu3FbVNWIFHCjwSsaJsBgLknX",
                "cc": "gi3SwUwwEsvXwalXnwmAjTFS41-Cvi5HNgG6qYkBuWg"
            }], [{
                "cv": "R3KYN25b8bbf2WfRoXZfbySv0srxLPesI9XRi68lvZnjiuDRou18zyMLuobSJCPh",
                "cc": "nSQj97mCknyOYGmbsH-sLfLNZQSC_AvXAN-lwqtfRks"
            }], [{
                "cv": "pGQWdn9zDyMB5988qQL8Ju53qVv6mclsTXKWPdQ2XwHfPE1eg6daewU0G7Khjoe2",
                "cc": "vqsKBAkbEsYO0OXuRxWl303R61Tu3_UOAjdvladr6lc"
            }], [{
                "cv": "oR0NQo9e7v6JyiMO28Kj7zTTxXtnR5BcUpQkuJdg5NPlyDOfXz4ZQnA12sBacdTo",
                "cc": "vpgkIusqMrgKWcBdSgoh4i_sa8rsa8vNIIo7-k1WqC0"
            }], [{
                "cv": "JSz8qzMe4zhpaI3CbRP2YuliTLm73YQcKHEZJA5oC6xoA8IDCXOgOyuKqUtkW21i",
                "cc": "6dAZsBO2NAj0fYuJgP3WQaHzuckLzh1mdr5yza5_-sA"
            }], [{
                "cv": "6pZ6XUo7BMmfgNmO9EkXlGJcFi4VPeMHvaFm33nJGPUSPV0BV9RSyeLplgMuSdtC",
                "cc": "Cry3vadcrIk71K9iLx_7-OkSMPjKPUOk7H0MnNlcy_I"
            }], [{
                "cv": "Wuy4XEqO8mgYtGuj0PXckhi08mNUx66sFEzH72qVj0f0kMRkqoJ5c2ZmxFeyVl7b",
                "cc": "magAUQcvfDH--K8GIV4V57P10olMeL-3bzkiUETKxRg"
            }], [{
                "cv": "1Xh8HBk42ZM1Gt2Nrz70tUH5qPNC8FbpMBjjweWg02MgWlHZMZKqfw2ZKalo1Gph",
                "cc": "ju1MOBBv-_kVDfdtX7rHLGtj9UTF3w4UrCZqg7DTnBI"
            }], [{
                "cv": "zY3Sg5MOPBvWvOW5j0OwKtxoI4iTFhXCC2ZpIoEnm3cekdNtKKJtfzeWt94dIydf",
                "cc": "JXSfcLtYCeAJtbAbc-YRux04l6DTnWWCXInFfrT6OTU"
            }], [{
                "cv": "7ZtNlrUfY9mkqT0YTYTAC21et3VPbJU6XXgGNvt660GjbHwcXrQtEkSJJCstLBlw",
                "cc": "qISFlAu8vKy87Wya13laVNk4krn_gK2TXhbUlZfPIgQ"
            }], [{
                "cv": "hVCVylAKEXmnePMOc8cbGukeMCIpcz0n7maimGhWtzqkwvndB0JkrB04zHQz7wWr",
                "cc": "2OqRu1mo-qGBEUl1Xfo_cZAcIfLy0O3bMAPpDsBtczg"
            }], [{
                "cv": "xwPVNDbrW3RmdBL5PAn8X8Hed5jC52tRo5zTx1h5Be5fbAHxywhmAoobfaFNENjb",
                "cc": "XVNGRcobEZQ9wY_fbssbRte8ePtBx5yOzKXN61fHc7A"
            }], [{
                "cv": "6FXf3MJ6MF370MSTnlq8ZqaogIo1j7wMNHjZ95PG1FVS9gj0m9Uswlv5Y17ABNYc",
                "cc": "UfqCFQx_UkkoZw8JADvcPOeW6H255Ps3PhzpGI4xZnA"
            }], [{
                "cv": "EfNmoySjOtJd7OsZQqvV3VjSQYBxXRSlkkrsGtrOFVTVU0wsheHNGrNmfFUSMR5M",
                "cc": "FP8gzPtV78-_j76_UNdYEdJbNWU21D9K-pVQdirAoRs"
            }], [{
                "cv": "W9MjFN8JFPYoeF68NOpq2txMvdaXK9Nhsh7tU3BNrYZOlm4UmndxZvrx5iVa4OYI",
                "cc": "Hi8jtRyHsofXJvNNo4sytkli4jzDpX7mySyW9MM35JQ"
            }], [{
                "cv": "yr6WeeBtrrFIYV5xKjms5WplHvh67nI1kA4KFNre790I1anzlZNlgKN1plTx72ua",
                "cc": "WK_WdywJqdDBdCzL1JW-E3YQJoBdSOWtK9JYqV32spw"
            }], [{
                "cv": "53NOBFGWOV4DrNPKBqDoLFTzOa7vMqs1KmkqycTMAENdEy4YKO2tPqR3KE05O7K6",
                "cc": "Z03NMdDq10EfWYuyetJlQuu2kPSwA6bUC5e2fSnq7p8"
            }], [{
                "cv": "SY0n78NRLpNcQFuWIVtvkpNehi00lLijq6OJ2Pw7RlFwGm9vIVxrNDbqjU45Uj7w",
                "cc": "fWTvoYamO7CLWGfIesXSS52rVP7DRPwybzleL6WZ8ws"
            }], [{
                "cv": "aTHFPFvCdSLPe3OEvt1UsJCDBlTGhyJ1nbsARYh11L9JEtiZOqvDsmW1kCjdl8JD",
                "cc": "jKMRjoa1oX4FJ1g1BCYI4ROLKuAcZyREoLk5k4ksTms"
            }], [{
                "cv": "A8rskruhJp8kcNNOvcFtQZ8queqVJDuS2x7hmOAiBNY2ap8B27CjktBdobdmyU9Z",
                "cc": "LJhgcbjIG4uWe-VDhb5g7ib8emaLUGEj8i2WlCwwPAE"
            }], [{
                "cv": "YstLFe2THbPHAcIpUdcvPWE7xmHhKMxfZRh5wRBjO6EUVs2z3rxYAfDewS6z4LyG",
                "cc": "jyZq3hyRZQ2GKWJOr3onsW0T3yMKxG5_nL8GSHOTdeE"
            }], [{
                "cv": "v8VTvOpO58XwUuFdXPhKJzFdu9j1hOCryezTxx13qwzgdBdaQg7Y8Acq8i1DtT0v",
                "cc": "kFNHXj8oO_pWH04WDpudncOpxjTgNvbfpWteq1stxEE"
            }], [{
                "cv": "ekuICKeEMIz2AKle4UCErPUkrd1j94EwtIONh7kz1ZKtqSfVtEioxov1iRpulsf2",
                "cc": "HbG6I97XSbf0Dhj1jCYE6wQRlVQFvmTzPj6jtRfsx_A"
            }], [{
                "cv": "zyymT0hs7dvS7Af2ODHuRna0n7IDDkSqQuP42N2KgDlNjDemvAQ1FXqrchuPvdeA",
                "cc": "0aeawD77pJo8z8oUx1CHUbFLVoWAGARwqf1j9JAAkSI"
            }], [{
                "cv": "tWtY0GXLIjJqLfa9i3optUbrPiW3kgBsh3DBJKzwb8S1jKeScH1ddzCH9XN5LGuQ",
                "cc": "BMqOg-oVB7oikYuwMq6Cb2NYzi9mZedjnYeQEpGRTbk"
            }], [{
                "cv": "znemr0r2Q06aj1TGefCa28K56KKbIVDg9n6hgslxJo3PI6hMQvMNSe6jv5X3rCDG",
                "cc": "byn6Gaz0MCE5gfHnXE1Cousr8zQzZ9VzxHZLFSOdPdU"
            }], [{
                "cv": "bw0n2v0j1KtUEmLFaNJyHqNX5HP9COZn35FKaglWjLawL0JkRWx89XcGsmotYrOt",
                "cc": "rxmwDCBY3JVzVx4ibKSU4gIJI5GbyIT-VgM5vxfE3hY"
            }], [{
                "cv": "pZrs8AgavHjhPqiuNtjfB8GKiL7UXYCYX8bHv8RGeRgRxnO42kxFEhRAf2d6EF4P",
                "cc": "2TO0f7VNc_aSGF6niifkx9u09peFokaxY47XRXaI2O4"
            }], [{
                "cv": "iO62GdCC2sWbGk3E8b2vBq1AQ2mXGWRFYMgj0bFGszLMQJvGARLpOOpdeOut7tE6",
                "cc": "ueScL1z_lv5zTA1G33PNVqNRGi9gvwL5LGgUNQ0NnV4"
            }], [{
                "cv": "Cm3e5b9NoDPSralIrRo2SBQAnCjX5DNl7Ac1YYDT08uCZTSaNvMjQoWY3zZEJysu",
                "cc": "TsqUyYf2x6OCX9x4FhPwa1Pn56I_XH-lnj07ku8gcLw"
            }], [{
                "cv": "z2QVjUywBdnJEnNzEdfMDZHLDBi24zCWRweUOq7sZHzMhmAVnGyZa2z57BJ65Ygs",
                "cc": "OTjNgZacUqqsUQiJ6H20U6N-O6kJ2NArX7ULwXeIYD8"
            }], [{
                "cv": "mE5Gwv8fK7pTqNKwMZK5C3XPTJJQkD91O8swkmCfse96xVMgYaj8jPC3Xu1uyZyy",
                "cc": "fInPGTvANXRKMxZT48fllsmj7Ozu8dvlniCWVf7UndA"
            }], [{
                "cv": "rxataZLvR7tSpGpyo3Nb35GoSNFJv5gdlJS44uKc4MXhN9mvATXn7yZlVm77jyZT",
                "cc": "Gc-4nPXqRDLTum8OnujtPZsl7ft4CClolpUN3F2k_78"
            }], [{
                "cv": "OuGuammDIcd6V83l4DF3ULgj54V0ZkcTTsq9unZ3DAeY1fPoKShIHLpa47tNuJEe",
                "cc": "hMCZyfcqb4K6isKrJ5u5y1WLQD-LSELsLZiz-MnYPH8"
            }], [{
                "cv": "vwJLj0e589cF9MMvYCIHYrgNALmbLfGAkiuGRXHu47ZVW2UaS2b0ZIcgr3HYp7m7",
                "cc": "HDF5py80ReK0w7c571JexQNz8XMwdfsSqN-Lek_zzgI"
            }], [{
                "cv": "McJ2EWtoDth2HRIj27xHGDuAyK86one9koeWMQAOPbCE95fYp0msWiweKzLWsPsY",
                "cc": "7sZXCpIbAkbXUPBEcWN5o3bLiYM7rM9CAoBs-2Pxbpk"
            }], [{
                "cv": "2Nwsu8t1czivB2NOCfBGGkqYrw39EHnzwKoFiU5bHmofsiHp5TCtBsol0GA2KjUK",
                "cc": "j2VHPB-JXdgKP90GU_7HpxmqaO8bw_GQFkXscJF204c"
            }], [{
                "cv": "RbFcQzys4wWpQQUEyYzRuiXSyjUey817k1WM84L8Tjfoi67A59KLT08WxcMEDXMl",
                "cc": "tb1vYyaZ0u2aC5pLDJtvAjsv5zmoQPqyablMvdBCE-s"
            }], [{
                "cv": "66BZVRUXp6r9sjWYxtMp6Iy1BaP8A0TAjurf0SWpDgVJvb3OwFmLka2AHIZbrqUN",
                "cc": "fQbz9MCF0DQxHNiJWXKzYwdyLa7vFW2tT-wDgR1DXn0"
            }], [{
                "cv": "fHsLNdg41MY2qs0AtNJZR4zdjZJQ6geRo2teSWNYaX23XzqnpfFinVc7f54OhvBH",
                "cc": "6NRGKxo4KsSC6yfWTsT1fdpb6ZszEA8cUIh7kJsm7kY"
            }], [{
                "cv": "hsluT6KM7nVXxLXEqRLRRAeA8Nl6iXugLbYOjiFwrYrLiFEe4XkvXSMYm1UKiBVx",
                "cc": "TKa2bce9Og6S6AAbu-w87QJNpZdVE6YFZByj7uaZFvI"
            }], [{
                "cv": "A7VKko7Vr1tTjnkezubUbn8RI2mFpfgIpzD45GjOldzRADU91EjN8neqD976e4La",
                "cc": "DdYyZq0ShQj1JA-2Gx312dSzbYIYrmiUqfl8_LQOM6A"
            }], [{
                "cv": "CKrr1ul1HFjnXOCMBim4XKtouiNF7mCZUaSEhyeTUKKMB9nAtGUjMwCRZGmE1DcN",
                "cc": "AoFNg0Wn2fE-OiRSScBC9X8HbRz8wbABEiwoPoFXmKQ"
            }], [{
                "cv": "iMNoNU6ENODmbrftOT1kK34UY0oGCkqMc0lolaQldPHq1BVXL9hZu6t9Cca9sePS",
                "cc": "ZKnmmmY3Ym4Vk23pOk7Cf7BMRms187MCh3gy9ev9iWU"
            }], [{
                "cv": "zLcou7yWIVVRmtQwQCCnrtH8nl8mjzQbGCl1SiJDMRmWKdszX2dlQhKbJacA9cO2",
                "cc": "lmBkUdxEhvPIuH7S5BCiBeRVOY_AXJmyrf9yNtR0hPE"
            }], [{
                "cv": "Ijq6QaXGdL3p9I7CMTIlrRLN8Aee38fZTu5hghqQC6AM5C9u65LJusL2TamPshsx",
                "cc": "kc17Khwk58tUFkgpU9Yd1MGIJJTAcJ4qcZf-Xo4npOc"
            }], [{
                "cv": "MDcOtUCpB9WMiYfgukf4jIvpraxs7qdUsvis4uBpE61cIKk4G3bQ3hajtE993j7u",
                "cc": "ipk0ISZgMKA5CEPbwD8PXF-AesXSFBpwfwTZxUD50do"
            }], [{
                "cv": "Qb1X98V8lLgLUeAarOQftDIt1rlt7RE9RMR3vOMcOrQeNkCx7YoabM7wjJiZLGTI",
                "cc": "IU3g0LZoD36gJ7AN7_Yh06nwkv8aiqFxqOY2ytl6sPM"
            }], [{
                "cv": "he5Es5kqWgobzZ9ZVHHBPqEGkbFuEW2ZxLmJ3ur6ceip7iGqwaUZu6xbQPJzIv3N",
                "cc": "DcWMvm29nksvbjAPPlAJAsBtr71h6RDa1a7tJdT4kDE"
            }], [{
                "cv": "g1rneVLiwcYkTw3ULmya7bQoFrOf5b6Y1KYy26THx69cbIUXN9vVPcdbuRiiYaIH",
                "cc": "VyyWsHaIOO-zhOcB9WdYnkZuLS4-xQes3FKihk7z3jc"
            }], [{
                "cv": "BvMwrxWulHUxMbaHBIvTCgl6e8CUP4M3dCjuudfCQaGo4sxtMjQmhD5cXU8OZP48",
                "cc": "8ckPnzm1Qycoxtp-TCXyn8Gip54XwgyS1qekjMOVsPM"
            }], [{
                "cv": "oPYNEXRbHuhxB1iBM9Lh06NA2L5eWpjDVh4TJpBMrfxW0zbYxYP3WN4G36OjXQpP",
                "cc": "FbhDJc5erPlaHYnmUwGQAwxfm6yFYlWyKIsOEbT8kWo"
            }], [{
                "cv": "U4amuJaMSgiHix9HuqXyEJxjgPPQEaedZvPIs59uYahARPrzLXTarAyiEq6UfL5n",
                "cc": "lCRj5XOQksQQNHsI_zu-I2Q_HCt7k5i-iQEoiDdIy90"
            }], [{
                "cv": "UHxlNGDRrjtUk8GWv1c4VDLfpDtCZvJXZEMsM3LTdWTFhNZxXJwRYWm1S102JDX4",
                "cc": "LK3mSiaMyJqSHK71wShkrtQgLpFCrAagK6JdL0N6EpE"
            }], [{
                "cv": "zHgPEu5hfUIVlmgIUglQBbbjO8YnyXoJOHHgszPqQKZspOaH7VO8NcciiJbhrDme",
                "cc": "-fuzzMJlV_FuVV77ifg2Lmf5TNLgeQA1y_cOMSQsBDo"
            }], [{
                "cv": "VyzOgv9l81LUWzo0uJeeQwn2VHrHIXzO7qXKCcGYi18WtLDU9ydPIVpjvgaUw8Jf",
                "cc": "o98z7TOMOMrYUb8_SZVqMgwPGbwVbMJxiwdj7ad7QJc"
            }], [{
                "cv": "4t00oTPc2BIJc1zvUFnELRmlPq787RFp2YMWOdE0VyAANSBJxCq1ObioUtFHeGIx",
                "cc": "61UszCkxuQ8GYDbmwOI75glQvx5ZKVjVb-zD9lT933w"
            }], [{
                "cv": "RWUIR9rSHl8veE52PXjudcr5upZtZh96WwgL8feAlrue81bp5XjmKJA6pL7KvOYD",
                "cc": "-JbfbJ_3dOREG0YMY-l8WL07TOEOnmSvWSHnHEVcmZg"
            }], [{
                "cv": "XLMsTEdkmV2LJl35U0cKJ5auzIN8TjPZLcS9BivfVXffTusIQD2U4KYZ2YgeWEk8",
                "cc": "VZdqwPvghF7I8ylE35K0_9nkGITtqf61LC9LOxvI3hQ"
            }], [{
                "cv": "5TUa2ecfBRWH0DZF4nY9NhdBeElWlukblvMctNtAnmzBsjnFXEpjUxrHjdG1ImKp",
                "cc": "IKnCwu4JSQJSM-uE6Yi5Wn-bBZw9UeoaBRhFopgWVA0"
            }], [{
                "cv": "yJToIsqWWit8F9v2m802vxPOwKmBXWJH483w8X7cq2LRLZnreCwGPdRR1ksG7znC",
                "cc": "MdXilYhVqwSTYTYCjfbzccuYpyfpZ-OF_Y-rMUhX7UU"
            }], [{
                "cv": "FabF1Rg3Gw1ljN4axMk3goThF7xYfBtOwruygUsPKIk1vb5YGPpQ4RzUSasVRIVO",
                "cc": "IZNIqkTTPfZvLDOJrplYg8ljyxjDAgwo74zVgcYpcak"
            }], [{
                "cv": "KrvBxc9g85Y9VNG8rpNaz4dP1usvXo6rrxGxGop59moZUGGWVMgDTJ2t2OjYPDrL",
                "cc": "yITWio0n4FKEZ0dZE-zQYQ-1eGb40HVGZuLfXtRDINg"
            }], [{
                "cv": "61BDi98cOTe7npj1ccyvwLQEqAfEA93uKOio5kM9Oy5M3MUYQPHtuKRtCEEaTuYW",
                "cc": "iOElrrKa-mgOwultYvrMmERsxBvxBcQ7oApzTO9Es0Y"
            }], [{
                "cv": "VtP7IJcUlimA844h8alVrDlRHkUQW6VYUHsTwh3QEFhmlCvZ02IpY9sLlqxHZqlt",
                "cc": "B9i8KK2v06fC_Nq9Bbln9mpuStvGiI5arNVXqGkonX0"
            }], [{
                "cv": "LJVCIfbeorUVnyyBY0ZjfJXTxUsDZEHlOoKPpkOGZx8BuD0H79ebPAWOwmALn1iV",
                "cc": "BaAVop0CUMXJIsVFt52j8YXfIkLVvZ-p-7bMPTT4xvM"
            }], [{
                "cv": "733Y78UvoN0TzuAU02QM2IV1af9BFmsCxzACWcDdoso7SmBogVhxioFD4NgOYpjA",
                "cc": "njILXs-mTNYnVnoNUTmZP5hAQfQqFk21xfC2OnPSikA"
            }], [{
                "cv": "d8y9R6YKC1Q00RBkMIJ8NZweSgz0nTzkzoNi6dPQoxmixGFzwvqY1c87hnPQvUTV",
                "cc": "l3qlrQNBFR_9MBlayw7bXfdlCqKcods2tLcypKXg-oM"
            }], [{
                "cv": "VwO6N56NZeQrqTzwfQo63LAcsRpXJN9ryGPRkDTCKw1CVgcLcUOlK2qhjH4BWzhG",
                "cc": "n_HI4sPohnyRe8TVh0nlTxpx6dOxL0-GY9x9R5KkGI4"
            }], [{
                "cv": "7u3gNaTkdEx15FLFKgyR41GMHwkVqyz3aYpt2kUZbdExlkDv1SKUStbqJw9k6xvG",
                "cc": "zdZ7pMHZ59Kwb2RiaB9gzYsQmN1bt8lE-pf9G0tEmyA"
            }], [{
                "cv": "O8Bv6sc3o6YyHH27sAcLynbbtPTTHle94CEM8OZpoX5SR82WRfokQBJNGWR82Ood",
                "cc": "_GqZMpsGkWF9ycZx29sIfeMWMk8k966T2-PxGtvKsbE"
            }], [{
                "cv": "ij0eNIAMQP6LCXFcCU6Ghf5W8aCLOt5AYfgcYj37ZOPdaeVL4SidPwmXpZx8X2Ti",
                "cc": "BZNpfhm7bm62wlziAtQaydRxI5fayVl1SI8nWyA1R1w"
            }], [{
                "cv": "i3zJLhWAgWYpDN5BM1TySoHQ5To9IYfli9u1s6TrsSjp7PHcDjVaX2o7o2xniN65",
                "cc": "3a-VlKyxzEmXX92fbinke8z4jRBNY0cNOYPnQI_ed5o"
            }], [{
                "cv": "htRQNaV62OPYdKtRXUisrC0RFAYmhonrQEQuukb7iiPM2KOTuDMWjabzbzJoMRvH",
                "cc": "aIuliDw8uXWpS6GBHOD_OdYAhTQsRPTaFtbvgRnHZtA"
            }], [{
                "cv": "ssd4QesPHkq89MYySoyO0pfixGshQwiKBl2j56xCO1UPjyQggCCTqVmRohOZWlID",
                "cc": "YLgr7zTnMPFOO7LqDlDVyl0h5SP8ljgQLswRgU527Tg"
            }], [{
                "cv": "vedxoWWyTjU9oGtM4rcyg7MGVvEAvJZYWjocJJ4asZNKRErGlmnBVBxVovCszrKD",
                "cc": "ZGFuH1_Wdm6M6UCElXvnpPCfPXArPlnxdxaBk1rQJK0"
            }], [{
                "cv": "uiCX2cHmnoIB2sOoJ0Nx3AkYHu7mYYZsCkfkFEQkcpgkbsJCgJfWaZDYLcCtIKoT",
                "cc": "bk059-nVjzRJhoiFqQGd1gX9jfYmKDC_UOtJMLpMUVM"
            }], [{
                "cv": "CW5r7cVTTsbNdzZo5Uanh1kCXZldbn9LLgJGWYdAkq4h4qbrmZFg91WFPfyAZD40",
                "cc": "pDlZvq2uy0mvDCKPEdcas62zaaUcTs1CQLtc9PanFN0"
            }], [{
                "cv": "kA9ShgF6yk0toYtmkgHAC6ZxW0Sl8XQS26mY9IYTJyFY8dfyAPwv0kAHvtEITS1s",
                "cc": "M8H5o1dbFezppmAHZK2IxrX0qYSTukX-dg6rRLiHU60"
            }], [{
                "cv": "IoS3snD0CL1KxyHh5KU2zuPTedeNvQFHnyPa14klBkF0iK0h8sUY4B9BNhuUSaro",
                "cc": "WFSuvj_pl9f9l2Qa0DJpGMv2YQ0gHs5Tapp6m0UtGeA"
            }], [{
                "cv": "BRPzlKS1jvkk040DyyFW0k6G1OFnZ39J5xGagVZYK4GVtpAIB7wKXQwT4syVfHUU",
                "cc": "_lhCjzlfkwlthJ2ssQ_0c3CCOpYE2exzF0ymeXLV79E"
            }], [{
                "cv": "sWIcx9XN2MoeZxupvzziOq8BNw7O0qZ8s9kDQYly0Ao5f8ttTEdG84WU2KDuNtvX",
                "cc": "lUoqXQBXbYN0R7NTgALk_ECstS2gvjfvpFeJBUvUUH0"
            }], [{
                "cv": "sspXbipYcQycbiMT7nLnyaw4EntGSJZehOhDxsudO5ZlGuNZaVtop0EV1ixV98AZ",
                "cc": "va6CzFY_pM-dwq-ODgzY8PBlvrxEft3ai0RnMm5xyT8"
            }], [{
                "cv": "iMSbZVkaED3IS7E4DpFXyuy71AoJ0cdJX183VcG8ow9En7MKj3NJ2oy6EpGIyUGH",
                "cc": "g4VQqMjU0UbJ7mZHZMrulNGvSHZpUfYLGC8iSAkTlzw"
            }], [{
                "cv": "lxnLO9q2u2IBhFJRZuR0tZwky0hVbBQN3anNzqZ5mG992C3iy9Ah0O6NBEYo9GB8",
                "cc": "CCStEpJUXfzLcBr_m64b9hHuhmBleQ8euKjKcrdgwDY"
            }], [{
                "cv": "GcPxCmkvs90aLQhLzgnu1uZtHbcsYeHEHIKaLpxW9ycvYBT04Ivwv97VchFVjoSX",
                "cc": "K_gG2AkyZk4BDOlLNNQmTAlleFqNje_rg_MkJgqrJTM"
            }], [{
                "cv": "oocDKVBUv5YlJPyEvqCW3OnavOkbBwSMvCQibKtJxLt2zOHt3C3v5X7YTErGLnta",
                "cc": "0vGh1f89XWanWbAy89-HsJjcALGYRIPjlOE-jGeAmaw"
            }], [{
                "cv": "6sA8wjYr1azm3CpnPMzvVk6inhk0to6Ncg7af0dVcSUyC0tVbteW6Umf5nqbwp0N",
                "cc": "h1aBPTYUbv0zWT609J8P3nZQn7EtDBLe6oEILiRwl8g"
            }], [{
                "cv": "PTA22ArHJRUmldkccbmr4gVTcthDCzVgoETpqSPTGtclDbE78oSz1O5bZeQylXLG",
                "cc": "C_SUL-h8TWRnpdLhR-ELq46QIiSFFKEyRNOdl-Vx9vY"
            }], [{
                "cv": "yMS2N42B0AJVMX1H3AVPT0PViBnlpnphKrYzTyhG37M02ntcbmBN4AqQ1yqr4z0g",
                "cc": "-hwod4j0aOZmXNN34GCW8Zvy8zAC3yYxSyTQng0lXcc"
            }], [{
                "cv": "FV0m3Kz1RXkFRiLiRpkVcLqgUYl3vdvNkRGnzh0bQDRrbmUpOX2pIen3V2FZEWbm",
                "cc": "8GYLlYo16Q7JjvMnQKb3pIShiPTTHMO3XSy0gqxciLM"
            }], [{
                "cv": "XZ7rg9nWKncTkBnvQFxv77KPvEKQ4mDs6g5wJAgEyaRdGS5Zr3plN5HZJReJXyJr",
                "cc": "_ogRDDKNTFv_f6VaZkta2J1eXgjTYGzGV3u1cEnOQFk"
            }], [{
                "cv": "2O49QYdjkgfzs7rIZr7hIqoQlWg04fxA033lZMvN67vB7RdYPinJqEOkhyVtGNLS",
                "cc": "eDgkfRaJTupX8kKtBW8vI4HsycUMW9rEIar7veKrLLI"
            }], [{
                "cv": "6QWdKus47tJtws3IrjSLHUQUVfBNU9QIZHar78Na9MqhwsD0VzYVG4T2E3F7UB9q",
                "cc": "VC8_68FZBZb26Z6vFYBsjLbx26e87TsdYgg8W9DEzi8"
            }], [{
                "cv": "f8fdonw7obw4XGpdNJGzVs993IZxYbl981CIdZH6SXNXsDOCT5NGnPeYEoNV9NjS",
                "cc": "dlipCiC5AzJIqzF3PoEQ_Xojq8vDCwGHOfiTVEfQGGU"
            }], [{
                "cv": "al7feEUOrozIRrIUKrxOASOrijQgTgpkBqJcdkSZwrOV8oclvPNXghBjSayFZvLJ",
                "cc": "9uI85bZB2qRcQHgmlOjFOJPyzXYgyyxOL4DyuugEBHs"
            }], [{
                "cv": "gydQCSld66Z93nd3nKrwfHG87yeKWg79PYjkuxAbuVvlzjaXjL7rBKcKHdKnxw3H",
                "cc": "GopTBo6ZJYJBbcxBIR8Nub9772n642GaqShhMjk2ml8"
            }], [{
                "cv": "SC2CyNRWBL7mFcfuF6Bsm1MgyizM5hlLKsSfS154a7xxaiO0BRkrvpdi2GEy6YIi",
                "cc": "1pPdgqMTRL_KYZtOI8ZQFAVcwLTenL3O9SLozK4dx3I"
            }], [{
                "cv": "ztvETott3qrR8ziMUJldEanD1D41ODbkgUVDb7XzVSKfbzQuDtJjFVallWwu01nJ",
                "cc": "HaiTktI2sSjPLaAJ1ul6G6DO2lbfOey0aT-tdY3u8-w"
            }], [{
                "cv": "b8e1DKDQYDcmbGyQVXwYAy71p903EFA4QQn79xT1FVeikKiHdDExq2WLBM3clafB",
                "cc": "J1VrGCAWJVRFmwwLK4bZvwNMe3Kw98lHxZaeQFh-4sw"
            }], [{
                "cv": "B6Z8Gs7GYxQoeBnhOarVATgc4sYjzLg2Bg4vsO78lDiZ8W0CxHosMiRJYYGccuZh",
                "cc": "RBHVB8qgYfCRs8ZkMvrObzLGUmF-jDlyXc-1ojNvUV4"
            }], [{
                "cv": "oUmTapRYzxyvkWqXoRbD7QDplImQnmPiijqw2X66k8RHKdvyuEaDzuQHREHP6ezb",
                "cc": "uVVdAmHikGDwOurDeub0KPIMQ6Q9JV4MBCOH7MoF35I"
            }], [{
                "cv": "i9r6VzGk7oSJmPiwKWekdPa86oBn9QcLeJzryp0SteJqcknHQCMrbR0bql3cxa3z",
                "cc": "5Pg4jfWZ74_F6ndQoB0tFRsHGfrz6BrG8Tl1kHgXFRs"
            }], [{
                "cv": "Wbkz69TRnhw3PnokcsjZMQ2Uxj7Rm4uim2BEjCWF4AaK5UcwCJ1Y48AJOGIpQcxm",
                "cc": "893Yv4UUE3Du7VW9TcxUFNQBTBsOuTF-lCMSVgcb2zQ"
            }], [{
                "cv": "1AdpoPjZAhIUZSyVk0MUvZ798T1KzngnQrGDbkkzfe63yVla7mi4VI5VdvRB5n4t",
                "cc": "FRMzsW1-loaCyu_wcPr4e_O9hcyhGSCefi_Jc41BTe8"
            }]]
        const pregen = preGens[Math.floor(Math.random() * preGens.length)][0]
        let state = generateRandomString(16);
        let scope = 'user-read-private';
        const codeVerifier = pregen['cv']
        const codeChallenge = pregen['cc']
        localStorage.setItem('code_verifier', codeVerifier);
        let args = new URLSearchParams({
            response_type: 'code',
            client_id: clientId,
            scope: scope,
            redirect_uri: redirectUri,
            state: state,
            code_challenge_method: 'S256',
            code_challenge: codeChallenge
        });
        window.location.href = 'https://accounts.spotify.com/authorize?' + args;
        // });
    }

    return (
        <div>
            <Navbar/>
        </div>
    );

    function generateRandomString(length) {
        let text = '';
        let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

        for (let i = 0; i < length; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }

    function base64encode(string) {
        return btoa(String.fromCharCode.apply(null, new Uint8Array(string)))
            .replace(/\+/g, '-')
            .replace(/\//g, '_')
            .replace(/=+$/, '');
    }

    async function generateCodeChallenge(codeVerifier) {
        const encoder = new TextEncoder();
        const data = encoder.encode(codeVerifier);
        const digest = await window.crypto.subtle.digest("SHA-256", data);

        return base64encode(digest);

    }

}

export default AuthorizeSpotifyPage;
