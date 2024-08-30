$(document).ready(function(){
   let grand_total_value=0;
   let card_value_sum=0;
   if($(':checkbox').is(':checked')){
    const array_val = [];
    const array_multiplier = [];
    const array_data_tbl_id = [];
    const array_data_name=[];
    let checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    
    for (let i = 0; i < checkboxes.length; i++) {
      array_val.push(checkboxes[i].value);
      array_multiplier.push((checkboxes[i]).getAttribute('data-multiplier'));
      array_data_tbl_id.push((checkboxes[i]).getAttribute('data-tableId'));
      array_data_name.push((checkboxes[i]).getAttribute('data-name'));
     
     
    }
    
    for (let i = 0; i < array_val.length; i++) {
      
        let card_value= array_val[i]
        let card_multiplier_value=array_multiplier[i];
        let data_table_id=array_data_tbl_id[i];
        let total_card_value=card_value*card_multiplier_value;
        let data_name=array_data_name[i];
        let inv_data_table_id="inv" + data_table_id
        card_value_sum +=parseInt(card_value);
        grand_total_value=grand_total_value+total_card_value;
        
       let markup = `<tr id=${data_table_id}><td>`+ card_value +`</td><td>` + card_multiplier_value + `</td><td>`+ total_card_value + `</td><tr>`;
       let invoice_markup = `<tr id=${inv_data_table_id}><td>`+ data_name+`</td><td> Details </td><td>`+ card_value +`</td><td>` + card_multiplier_value + `</td><td>`+ total_card_value + `</td><tr>`;
       let  table = $(".allocation-table tr:last"); 
       let invoice_table = $(".invoice-tbl tr:last");
       table.before(markup);
       invoice_table.before(invoice_markup);
       $('#inv_pnt').text(card_value_sum);
         $('#grd_total').text(grand_total_value);
         $('#inv_amt').text(grand_total_value);
         $('#used').text(grand_total_value);
         let wallet_amt = $('#wallet_amt').text();
         let used=$('#used').text();
         if(wallet_amt>=used){
                    let available_bal = wallet_amt-used;
                    $('#available').text(available_bal);
                    $('#you_pay').text(0);
                }
                else{
                    let available_bal = used-wallet_amt
                    $('#you_pay').text(available_bal);
                    $('#available').text(0);
                }
      }
      
   }
    $(':checkbox').change(
        function(){
           
            if ($(this).is(':checked')) {
               let card_value= $(this).val();
               let card_multiplier_value=$(this).attr('data-multiplier');
               let data_table_id=$(this).attr('data-tableId');
               let inv_data_table_id="inv" + $(this).attr('data-tableId');
               let total_card_value=card_value*card_multiplier_value;
               let data_name=$(this).attr('data-name');
               card_value_sum +=parseInt(card_value);
               grand_total_value=grand_total_value+total_card_value;
               
              let markup = `<tr id=${data_table_id}><td>`+ card_value +`</td><td>` + card_multiplier_value + `</td><td>`+ total_card_value + `</td><tr>`;
              let invoice_markup = `<tr id=${inv_data_table_id}><td>`+ data_name +`</td><td> Details </td><td>`+ card_value +`</td><td>` + card_multiplier_value + `</td><td>`+ total_card_value + `</td><tr>`;
              console.log(invoice_markup);
              let  table = $(".allocation-table tr:last"); 
              let invoice_table = $(".invoice-tbl tr:last");
              table.before(markup);
              invoice_table.before(invoice_markup);
              $('#inv_pnt').text(card_value_sum);
                $('#grd_total').text(grand_total_value);
                $('#inv_amt').text(grand_total_value);
                $('#used').text(grand_total_value);
                let wallet_amt = $('#wallet_amt').text();
                let used=$('#used').text();
                if(wallet_amt>=used){
                    let available_bal = wallet_amt-used;
                    $('#available').text(available_bal);
                    $('#you_pay').text(0);
                }
                else{
                    let available_bal = used-wallet_amt
                    $('#you_pay').text(available_bal);
                    $('#available').text(0);
                }
               
               
                
            }
            else if($(this).not(':checked')){
                let remove_id=$(this).attr('data-tableId')
                $("#"+remove_id).remove();
                $("#inv" + remove_id).remove();
                let card_value= $(this).val();
                let card_multiplier_value=$(this).attr('data-multiplier');
                let total_card_value=card_value*card_multiplier_value;
                
                grand_total_value=grand_total_value-total_card_value;
                card_value_sum=card_value_sum-card_value;
                $('#inv_pnt').text(card_value_sum);
                $('#grd_total').text(grand_total_value);
                $('#inv_amt').text(grand_total_value);
                $('#used').text(grand_total_value);
                let wallet_amt = $('#wallet_amt').text();
                let used=$('#used').text();
                if(wallet_amt>=used){
                    let available_bal = wallet_amt-used;
                    $('#available').text(available_bal);
                    $('#you_pay').text(0);
                }
                else{
                    let available_bal = used-wallet_amt
                    $('#you_pay').text(available_bal);
                    $('#available').text(0);
                }

            }
            
                
            
        });




        $("#chck_btn").click(function(){
            $('.invoice-tbl-container').css('display','block');
          });

         
          
  });