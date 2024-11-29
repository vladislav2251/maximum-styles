<script>
  import { goto } from '$app/navigation';
  let translation;
  export let data;
  let orderStatuses = [
    { value: 0, label: 'Pending', color: 'bg-yellow-500' },
    { value: 1, label: 'Seen', color: 'bg-blue-500' },
    { value: 2, label: 'Delivering', color: 'bg-green-500' },
    { value: 3, label: 'Delivered', color: 'bg-purple-500' },
    { value: 5, label: 'Cancelled', color: 'bg-red-500' },
  ];
  let parsedData = data.data;
  const onButtonClick = (id) => {
    goto(`/admin/orders/edit/${id}`);
  };
</script>

<section class="w-full overflow-auto">
  <table class="min-w-[1244px] w-full border-collapse">
    <thead class="bg-gray-300">
      <tr>
        <th class="p-2 text-left">First Name</th>
        <th class="p-2 text-left">Last Name</th>
        <th class="p-2 text-left">Phone</th>
        <th class="p-2 text-left">Country</th>
        <th class="p-2 text-left">City</th>
        <th class="p-2 text-left">Address</th>
        <th class="p-2 text-left">Postcode</th>
        <th class="p-2 text-left">Customer Status</th>
        <th class="p-2 text-left">Total Order Price</th>
        <th class="p-2 text-left">Status</th>
        <th class="p-2 text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      {#each parsedData as order, index}
        <tr class={index % 2 === 0 ? 'bg-white' : 'bg-gray-200'}>
          <td class="p-2">{order.personal_data.first_name}</td>
          <td class="p-2">{order.personal_data.last_name}</td>
          <td class="p-2">{order.personal_data.phone}</td>
          <td class="p-2">{order.personal_data.delivery_data.country}</td>
          <td class="p-2">{order.personal_data.delivery_data.city}</td>
          <td class="p-2">{order.personal_data.delivery_data.address}</td>
          <td class="p-2">{order.personal_data.delivery_data.postcode}</td>
          <td class="p-2">{order.customer_status}</td>
          <td class="p-2">{order.price}</td>
          <td class="p-2">
            <span
              class={orderStatuses.find(
                (status) => status.value === order.status
              )?.color}
            >
              {orderStatuses.find((status) => status.value === order.status)
                ?.label}
            </span>
          </td>
          <td>
            <button
              type="button"
              on:click={() => onButtonClick(order._id)}
              class="px-6 py-1 bg-[var(--color-primary-300)] text-white rounded hover:bg-opacity-90 transition-colors"
              >Edit</button
            >
          </td>
        </tr>
      {/each}
    </tbody>
  </table>
</section>
