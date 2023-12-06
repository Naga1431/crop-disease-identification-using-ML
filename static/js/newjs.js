var cause= document.getElementById("cause");
var affects= document.getElementById("affects");
var treat= document.getElementById("treat");
var prevention= document.getElementById("prevention");


$(document).ready(function () {
    var cause= document.getElementById("cause");
var affects= document.getElementById("affects");
var treat= document.getElementById("treat");
var prevention= document.getElementById("prevention");
    $('.image-section').hide();
    $('.loader').hide();
    $('#result').hide();
    function readURL(input) {
        if (input.files && input.files[0]) {
            var reader = new FileReader();
            reader.onload = function (e) {
                $('#imagePreview').attr( 'src', e.target.result );
            }
            reader.readAsDataURL(input.files[0]);
        }
    }
    $("#imageUpload").change(function () {
        $('.image-section').show();
        $('#btn-predict').show();
        $('#result').text('');
        $('#result').hide();
        readURL(this);
    });
    // Predict
    $('#btn-predict').click(function () {
        var form_data = new FormData($('#upload-file')[0]);

        // Show loading animation
        $(this).hide();
        $('.loader').show();

        // Make prediction by calling api /predict
        $.ajax({
            type: 'POST',
            url: '/predict',
            data: form_data,
            contentType: false,
            cache: false,
            processData: false,
            async: true,
            success: function (data) {
                // Get and display the result
                $('.loader').hide();
                $('#result').fadeIn(600);
                $('#result').text(data);
                console.log('Success!');
                console.log(data);
                document.getElementById("table").style.display = "block";
                if(data=="Potato___Early_blight"){
                cause.innerHTML="Fungus [Alternaria solani]";
                affects.innerHTML="Affects leaves, stems and tubers and can reduce yield, tuber size, storability of tubers, quality of fresh-market and processing tubers and marketability of the crop";
                treat.innerHTML="Thoroughly spray the plant (bottoms of leaves also) with Bonide Liquid Copper Fungicide concentrate";
                prevention.innerHTML="Planting potato varieties, Avoid overhead irrigation and allow for sufficient aeration between plants to allow the foliage to dry as quickly as possible";
                }
                if(data=="Potato___healthy"){
                    cause.innerHTML="None";
                    affects.innerHTML="None";
                    treat.innerHTML="None";
                    prevention.innerHTML="None";
                    }
                    if(data=="Potato___Late_blight"){
                        cause.innerHTML="Water Mold [Phytophthora infestans]";
                        affects.innerHTML="Infect potato foliage and tubers at any stage of crop development";
                        treat.innerHTML="Fungicides that contain maneb, mancozeb, chlorothanolil, or fixed copper";
                        prevention.innerHTML="Eliminating cull piles and volunteer potatoes, using proper harvesting and storage practices, and applying fungicides when necessary, Air drainage to facilitate the drying of foliage each day is important";
                        }
                        if(data=="Tomato_healthy"){
                            cause.innerHTML="None";
                            affects.innerHTML="None";
                            treat.innerHTML="None";
                            prevention.innerHTML="None";
                            }
                            if(data=="Tomato_Septoria_leaf_spot"){
                                cause.innerHTML="the fungus Septoria lycopersici.";
                                affects.innerHTML="affected leaves turn yellow and eventually shrivel up, brown, and drop off";
                                treat.innerHTML="Removing Infected Leaves. Remove infected leaves immediately.Consider Organic Fungicide Options";
                                prevention.innerHTML="Use raised beds and rotate which bed has tomatoes from year to year.If symptoms of Septoria leaf spot appear on the lower leaves, removing affected leaves may reduce disease.";
                                }
                                if(data=="Tomato_Leaf_Mold"){
                                    cause.innerHTML="a fungal pathogen called Passalora fulva (syn. Cladosporium fulvum";
                                    affects.innerHTML="Leaves wither and die but often remain attached to the plant. Infected blossoms turn black and fall off.";
                                    treat.innerHTML="Apply sulfur or copper-based fungicides to prevent infection of susceptible plants. For best results, apply early or at the first sign of disease.";
                                    prevention.innerHTML="Avoid overhead watering: Water the base of the plant only.";
                                    }
                                if(data=="Pepper__bell___healthy"){
                                        cause.innerHTML="None";
                                        affects.innerHTML="None";
                                        treat.innerHTML="None";
                                        prevention.innerHTML="None";
                                    }
                                    if(data=="Tomato_Early_blight"){
                                        cause.innerHTML=" Alternaria tomatophila and Alternaria solani";
                                        affects.innerHTML="severe defoliation, yield loss, and poor fruit quality";
                                        treat.innerHTML="If you touch infected leaves, wash your hands well before working in healthy tomato plants.It is okay to remove up to one third of the plant's leaves if you catch the disease early.";
                                        prevention.innerHTML="Maintain plant vigor. Maintaining adequate fertilization and improving host vigor can reduce susceptibility to early blight. Remove volunteer weeds.Rotate every 2-3 years.";
                                        }
                            
            },
        });
    });
});