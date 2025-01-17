<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        .left-category ul {
            display: none;
            padding-left: 20px;
        }

        .active {
            font-weight: bold;
        }

        .category {
            font-size: 16px;
            cursor: pointer;
            text-decoration: none;
            color: #333;
        }
    </style>
</head>

<body>

    <section>
        <ul class="left-category">
            <li>
                <a href="#" class="category">Surgical Instruments</a>
                <ul>
                    <li>
                        <a href="#" class="category">General Instruments</a>
                        <ul>
                            <li>
                                <a href="#" class="category">Scalpel Handles</a>
                                <ul>
                                    <li>
                                        <a href="#">Scalpel Handles > 1</a>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <a href="#">Operating Knives </a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="category">Dental Instrument</a>
                <ul>
                    <li>
                        <a href="#">Surgical Aspirator Kit</a>
                    </li>
                </ul>
            </li>
            <li>
                <a href="#" class="category">Hollowware</a>
                <ul>
                    <li>
                        <a href="#">Hollowware > 1</a>
                    </li>
                </ul>
            </li>
        </ul>
    </section>

    <script>
        document.querySelectorAll('.category').forEach(function (categoryLink) {
            categoryLink.addEventListener('click', function (e) {
                e.preventDefault(); 

                const subcategories = categoryLink.nextElementSibling;

                if (subcategories && subcategories.tagName === 'UL') {
                    if (subcategories.style.display === 'none' || subcategories.style.display === '') {
                        subcategories.style.display = 'block';
                    } else {
                        subcategories.style.display = 'none';
                    }
                }

                document.querySelectorAll('.category').forEach(function (link) {
                    link.classList.remove('active');
                });
                categoryLink.classList.add('active');
            });
        });
    </script>

</body>

</html>
