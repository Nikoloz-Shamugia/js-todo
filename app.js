const currentDate = new Date();
        
const day = currentDate.getDate();
const month = currentDate.toLocaleString('default', { month: 'short' });
const year = currentDate.getFullYear();
const hours = currentDate.getHours();
const minutes = currentDate.getMinutes();

const formattedDateDay = `${day} ${month} ${year}`;
const formattedDateHour = `${hours}:${minutes}`;

const dayDate = document.querySelector('#day'); 
const hourDate = document.querySelector('#hour'); 
dayDate.textContent = formattedDateDay;
hourDate.textContent = formattedDateHour;

const addButton = document.querySelector('.todo-adder');
const input = document.querySelector('.todo-input');
const tasks = document.querySelector('.tasks');

addButton.addEventListener('click', (event) => {
    event.preventDefault(); 
    if (input.value.trim() !== '') {
        const li = document.createElement('li');
        li.innerHTML = `
            <div>${input.value}</div>
            <div> 
                <img class="empty-space" src ="images/empty.svg">
                <img class="trash-icon" src ="images/trash-icon.svg">
            </div>
        `
        tasks.appendChild(li);
        input.value = '';
        li.classList.add('todo-task')

        const trashIcon = li.querySelector('.trash-icon');
        trashIcon.addEventListener('click', () => {
            li.remove();
        });

        const emptyDot = document.querySelector('.empty-space')
        emptyDot.addEventListener('click' , ()=>{
            emptyDot.setAttribute('src' , 'images/full-dot.png')
        })
    }
}); 

const trashIcon = document.querySelector('.trash-icon')
const emptyDot = document.querySelector('')

trashIcon.addEventListener('click' , () =>{
    li.remove()
})
