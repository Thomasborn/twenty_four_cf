import instaloader

# Inisialisasi instaloader
L = instaloader.Instaloader(download_video_thumbnails=False, save_metadata=False)

# Jika ingin download dari akun private yang kamu punya aksesnya:
# L.login("username_instagram_kamu", "password_instagram_kamu")

def download_post(url):
    try:
        shortcode = url.split("/")[-2]
        print(f"Downloading post: {shortcode}")

        post = instaloader.Post.from_shortcode(L.context, shortcode)
        L.download_post(post, target=shortcode)

        print("Download selesai!")
    except Exception as e:
        print("Error:", e)

# Masukkan URL posting IG
links = [
    "https://www.instagram.com/p/DRv2KQ-jwJY/",
    "https://www.instagram.com/p/DRYw9AvD1_l/",
    "https://www.instagram.com/p/DRRq9uQCa6H/",
    "https://www.instagram.com/p/DROX2dAD-1-/",
    "https://www.instagram.com/p/DQv3f2jD-kw/",
    "https://www.instagram.com/p/DQ-8r9mD_FO/",
    "https://www.instagram.com/reel/DRqkV-Rj96x/",
    "https://www.instagram.com/reel/DRRsx5LD6YF/",
    "https://www.instagram.com/reel/DQ32HejDxGF/",
    "https://www.instagram.com/reel/DQdcfOGjz1V/"
]

for link in links:
    download_post(link)
