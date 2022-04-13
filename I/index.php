<!-- Interface Segregation Principle
Many client-specific interfaces are better than one general purpose interface.
The Interface Segregation Principle states that a client should never be forced to implement an interface that it does not use,
or clients shouldn't be forced to depend on methods they do not use. -->

<?php

interface Workable
{
    public function canCode();
    public function code();
    public function test();
}
class Developer implements Workable
{
    public function canCode()
    {
        return true;
    }
    public function code()
    {
        return 'coding';
    }
    public function test()
    {
        return 'testing in localhost';
    }
}
class Tester implements Workable
{
    public function canCode()
    {
        return false;
    }
    public function code()
    {
        // Tester is having to implement an unnecessary method
         throw new Exception('Opps! I can not code');
    }
    public function test()
    {
        return 'testing in test server';
    }
}
class ProjectManagement
{
    public function processCode(Workable $member)
    {
        if ($member->canCode()) {
            $member->code();
        }
    }
}